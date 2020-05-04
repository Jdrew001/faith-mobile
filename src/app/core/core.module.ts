import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './helper.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './utils/RequestInterceptor';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { EmailService } from './services/email.service';
import { SharedService } from '../shared/shared.service';



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
    EmailService
  ],
  exports: [LoaderComponent]
})
export class CoreModule { }
