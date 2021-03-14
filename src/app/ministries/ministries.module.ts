import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistriesPageRoutingModule } from './ministries-routing.module';

import { MinistriesPage } from './ministries.page';
import { SharedModule } from '../shared/shared.module';
import { MinistriesService } from './ministries.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistriesPageRoutingModule,
    SharedModule
  ],
  declarations: [MinistriesPage],
  providers: [MinistriesService]
})
export class MinistriesPageModule {}
