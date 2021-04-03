import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './helper.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './utils/RequestInterceptor';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { EmailService } from './services/email.service';
import { SharedService } from '../shared/shared.service';
import { NetworkService } from './services/network.service';
import { AlertService } from './services/alert.service';
import { PushNotificationService } from './services/push-notification.service';
import { AuthorizationService } from './services/authorization.service';
import { ToastService } from './services/toast.service';
import { VersionService } from './services/version.service';
import { Market } from '@ionic-native/market/ngx';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HelperService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    EmailService,
    NetworkService,
    AlertService,
    PushNotificationService,
    AuthorizationService,
    ToastService,
    VersionService,
    Market
  ],
  exports: [LoaderComponent]
})
export class CoreModule { }
