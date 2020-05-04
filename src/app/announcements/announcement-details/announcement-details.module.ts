import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementDetailsPageRoutingModule } from './announcement-details-routing.module';

import { AnnouncementDetailsPage } from './announcement-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AnnouncementDetailsPageRoutingModule
  ],
  declarations: [AnnouncementDetailsPage]
})
export class AnnouncementDetailsPageModule {}
