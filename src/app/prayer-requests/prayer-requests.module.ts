import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerRequestsPageRoutingModule } from './prayer-requests-routing.module';

import { PrayerRequestsPage } from './prayer-requests.page';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    IonicModule,
    SharedModule,
    PrayerRequestsPageRoutingModule
  ],
  declarations: [PrayerRequestsPage]
})
export class PrayerRequestsPageModule {}
