import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerRequestsPageRoutingModule } from './prayer-requests-routing.module';

import { PrayerRequestsPage } from './prayer-requests.page';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { LoaderService } from '../core/loader/loader.service';
import { PhoneMaskDirective } from '../shared/directives/phone-mask.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    PrayerRequestsPageRoutingModule,
    CoreModule
  ],
  declarations: [PrayerRequestsPage]
})
export class PrayerRequestsPageModule {}
