import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppConstants } from './app-constants';
import { MenuService } from './shared/services/menu.service';
import { ThemedBrowserService } from './shared/services/themed-browser.service';
import { NetworkService } from './core/services/network.service';
import { AlertService } from './core/services/alert.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PushNotificationService } from './core/services/push-notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent implements OnInit, AfterViewChecked {
  public selectedIndex = 0;
  public appPages = AppConstants.PAGES;
  menuItems = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private menuService: MenuService,
    private inAppBrowser: InAppBrowser,
    private networkService: NetworkService,
    private alertService: AlertService,
    private pushNotificationService: PushNotificationService,
    private router: Router
  ) {
    this.initializeApp();
    this.fetchMenuConfig();
  }

  ngOnInit() {
    this.networkService.networkStatus$.subscribe(val => this.showHideNetworkModal(val));
    
  }

  ngAfterViewChecked() {
    this.updateMenuState();
  }

  initializeApp() {
    this.platform.ready().then((source) => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      alert('Platform: ' + source);
    });
  }

  fetchMenuConfig() {
    this.menuService.fetchMenuReference().subscribe(ref => {
      console.log(ref);
      this.menuItems = ref;
    });
  }

  getMenuItemStatus(name) {
    // return this.menuItems.find(x => x.name === name) ? this.menuItems.find(x => x.name === name).status : false;
    return true;
  }

  giveSelected() {;
    this.inAppBrowser.create(AppConstants.giveUrl, '_system', AppConstants.options);
  }

  showHideNetworkModal(val) {
    console.log('Network connection: ', val);
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
}
