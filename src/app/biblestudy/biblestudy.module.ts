import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiblestudyPageRoutingModule } from './biblestudy-routing.module';

import { BiblestudyPage } from './biblestudy.page';
import { BiblestudyService } from './biblestudy.service';
import { SharedModule } from '../shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiblestudyPageRoutingModule,
    SharedModule,
    LazyLoadImageModule
  ],
  providers: [
    BiblestudyService
  ],
  declarations: [BiblestudyPage]
})
export class BiblestudyPageModule {}
