import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementsPageRoutingModule } from './announcements-routing.module';

import { AnnouncementsPage } from './announcements.page';
import { SharedModule } from '../shared/shared.module';
import { AutoScrollDirective } from '../shared/auto-scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AnnouncementsPage]
})
export class AnnouncementsPageModule {}
