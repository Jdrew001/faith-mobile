import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementsPageRoutingModule } from './announcements-routing.module';

import { AnnouncementsPage } from './announcements.page';
import { SharedModule } from '../shared/shared.module';
import { AutoScrollDirective } from '../shared/auto-scroll.directive';
import { AnnouncementDetailsPage } from './announcement-details/announcement-details.page';
import { AnnouncementDetailsPageModule } from './announcement-details/announcement-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementsPageRoutingModule,
    AnnouncementDetailsPageModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AnnouncementsPage],
  entryComponents: [AnnouncementDetailsPage]
})
export class AnnouncementsPageModule {}
