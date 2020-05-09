import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AnnouncementService } from './announcements/announcement.service';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AnnouncementsPage } from './announcements/announcements.page';
import { AnnouncementsPageModule } from './announcements/announcements.module';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CoreModule ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AnnouncementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
