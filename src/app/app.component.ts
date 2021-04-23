import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

import { Platform, IonContent, AnimationController, ModalController, AlertController } from '@ionic/angular';
import { Platform, IonContent, AnimationController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppConstants } from './app-constants';
import { MenuService } from './shared/services/menu.service';
import { NetworkService } from './core/services/network.service';
import { AlertService } from './core/services/alert.service';
import { PushNotificationService } from './core/services/push-notification.service';
import { Router } from '@angular/router';
import { AudioPlayerService } from './shared/services/audio-player.service';
import { Sermon, SermonData } from './connect/components/sermons/sermons.model';
import { Plugins } from '@capacitor/core';
import { PushDetailsComponent } from './shared/components/push-details/push-details.component';
import { VersionService } from './core/services/version.service';
import { UpdateType } from './core/models/update.model';
import { AuthenticationComponent } from './core/components/authentication/authentication.component';

const { Browser } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent implements OnInit, AfterViewChecked {
  public selectedIndex = 0;
  public appPages = AppConstants.PAGES;
  public showAudio = false;
  shouldRunShowAnimation = true;
  menuItems = [];
  sermons: Sermon[];
  currentPlaying: Sermon;
  isBack = false;
  isForward = false;
  isMinimized = false;
  audioHeight = '135px';

  @ViewChild('content', { static: false }) content: IonContent;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private menuService: MenuService,
    private networkService: NetworkService,
    private alertService: AlertService,
    private pushNotificationService: PushNotificationService,
    private router: Router,
    private audioPlayerService: AudioPlayerService,
    private animationCtrl: AnimationController,
    private modalController: ModalController,
    private versionService: VersionService,
    private alertController: AlertController
  ) {
    this.initializeApp();
    this.fetchMenuConfig();
  }

  ngOnInit() {
    this.networkService.networkStatus$.subscribe(val => this.showHideNetworkModal(val));
    this.initSubscriptions();
  }

  ngAfterViewChecked() {
    this.updateMenuState();
  }

  initializeApp() {
    this.platform.ready().then((source) => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.versionService.checkForUpdate();
      this.pushNotificationService.init();
      this.pushModalSub();
    });
  }

  initSubscriptions() {
    this.audioPlayerService.audioPlayer$.subscribe(item => {
      if (item) {
        this.showAudio = true;
        this.sermons = item.data;
        this.currentPlaying = item.currentPlaying;
        this.isBack = this.sermonData(item.currentPlaying).prev ? false : true;
        this.isForward = this.sermonData(item.currentPlaying).next ? false : true;

        if (this.shouldRunShowAnimation) {
          this.showAnimation();
        }

        this.shouldRunShowAnimation = false;
      } else {
        this.showAudio = false;
        this.currentPlaying = null;
      }
    });
  }

  pushModalSub() {
    this.pushNotificationService.pushModalShow$.subscribe(res => {
      if (res && res.show) {
        this.pushNotificationService.fetchNotification(res.data).subscribe(res => {
          this.presentPushModal(res);
        });
        setTimeout(() => {this.pushNotificationService.pushModalShow$.next({show: false, data: null})}, 500);
      }
    });
  }

  fetchMenuConfig() {
    // this.menuService.fetchMenuReference().subscribe(ref => {
    //   this.menuItems = ref;
    // });
  }

  getMenuItemStatus(name) {
    return true;
  }

  async giveSelected() {
    await Browser.open({ url: AppConstants.giveUrl });
  }

  

  async navigateToFeedback() {
    await Browser.open({ url: AppConstants.feedbackUrl });
  }

  showHideNetworkModal(val) {
    const params = AppConstants.networkAlertParams;
    !val ? this.alertService.presentAlert(params.header, params.subHeader, params.message) : null;
  }

  updateMenuState() {
    const url = this.router['routerState'].snapshot.url;
    if (url !== '') {
      let result = AppConstants.PAGES.findIndex(x => x.url === url);
      result !== -1 ? this.selectedIndex = result : this.selectedIndex = 0;
    }
  }

  private async presentPushModal(data) {
    const modal = await this.modalController.create({
      component: PushDetailsComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        pushDetails: data
      }
    });
    return await modal.present();
  }
  async navigationToDetail() {
    const modal = await this.modalCtrl.create({
      component: AuthenticationComponent,
      cssClass: 'my-custom-class'
      // componentProps: {
      //   'event': eDetail 
      // }
    });
    return await modal.present();
  }


  /**
   * BEGIN AUDIO LOGIC
   *  
   * 
   */
  audioClosed(val) {
    if (val) {
      let beginPos = this.isMinimized ? 'translateY(80px)' : 'translate(0px)';
      let animation = this.animationCtrl.create()
        .addElement(document.querySelector('.audioPlayer'))
        .duration(300)
        .easing('ease-in')
        .fromTo('transform', beginPos, 'translateY(200px)')
        .fromTo('height', this.audioHeight, '0px');

      animation.play().then(val => {
        this.showAudio = false;
        this.shouldRunShowAnimation = true;
        this.currentPlaying = null;
        this.isMinimized = false;
      });
    }
  }

  audioMinimized(val) {
    if (val) {
      this.isMinimized = true;
      let animation = this.animationCtrl.create()
        .addElement(document.querySelector('.audioPlayer'))
        .duration(300)
        .easing('ease-in')
        .fromTo('height', '135px', '45px');

      animation.play();
      this.audioHeight = '45px';
    } else {
      this.isMinimized = false;
      let animation = this.animationCtrl.create()
        .addElement(document.querySelector('.audioPlayer'))
        .duration(300)
        .easing('ease-in')
        .fromTo('height', '45px', '135px');

      animation.play();

      this.audioHeight = '135px';
    }
  }

  nextPressed(val) {
    if (val) {
      const next = this.sermonData(this.currentPlaying).next;
      this.audioPlayerService.audioPlayer$.next({ data: this.sermons, currentPlaying: next});
      this.audioPlayerService.audioState$.next(next);
    }
  }

  backPressed(val) {
    if (val) {
      const prev = this.sermonData(this.currentPlaying).prev;
      this.audioPlayerService.audioPlayer$.next({ data: this.sermons, currentPlaying: prev});
      this.audioPlayerService.audioState$.next(prev);
    }
  }

  private sermonData(currentPlaying) {
    const index = this.retrieveIndex(currentPlaying);
    const audioData: SermonData = {
      prev: index === 0 ? null : this.sermons[index - 1],
      current: currentPlaying,
      next: index === (this.sermons.length - 1) ? null : this.sermons[index + 1],
      data: this.sermons
    }

    return audioData;
  }

  private retrieveIndex(item: Sermon) {
    return this.sermons.findIndex(x => x.id === item.id);
  }

  private showAnimation() {
    const anim = this.animationCtrl.create()
    .addElement(document.querySelector('.audioPlayer'))
    .duration(300)
    .easing('ease-in')
    .fromTo('transform', 'translateY(200px)', 'translateY(0px)')
    .fromTo('height', '0px', '135px');
    anim.play();
    this.audioHeight = '135px';
  }
}
