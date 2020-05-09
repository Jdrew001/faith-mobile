import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AnnouncementService } from './announcements/announcement.service';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AnnouncementsPage } from './announcements/announcements.page';
import { AnnouncementsPageModule } from './announcements/announcements.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CoreModule ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    File,
    FileOpener,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AnnouncementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
