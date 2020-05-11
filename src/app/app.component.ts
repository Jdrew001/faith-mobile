import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppConstants } from './app-constants';
import { MenuService } from './shared/services/menu.service';
import { ThemedBrowserService } from './shared/services/themed-browser.service';
import { NetworkService } from './core/services/network.service';
import { AlertService } from './core/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = AppConstants.PAGES;
  menuItems = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private menuService: MenuService,
    private ThemedBrowserService: ThemedBrowserService,
    private networkService: NetworkService,
    private alertService: AlertService
  ) {
    this.initializeApp();
    this.setDefaultView();
    this.fetchMenuConfig();
  }

  ngOnInit() {
    this.networkService.networkStatus$.subscribe(val => this.showHideNetworkModal(val));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }

  setDefaultView() {
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
    }
  }

  fetchMenuConfig() {
    this.menuService.fetchMenuReference().subscribe(ref => {
      console.log(ref);
      this.menuItems = ref;
    });
  }

  getMenuItemStatus(name) {
    return this.menuItems.find(x => x.name === name) ? this.menuItems.find(x => x.name === name).status : false;
  }

  giveSelected() {
    this.ThemedBrowserService.openBrowser(AppConstants.giveUrl, AppConstants.themedBrowserOptions);
  }

  showHideNetworkModal(val) {
    console.log('Network connection: ', val);
    const params = AppConstants.networkAlertParams;
    !val ? this.alertService.presentAlert(params.header, params.subHeader, params.message) : null;
  }
}
