import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { SharedModule } from '../shared/shared.module';
import { CalendarModule } from "ion2-calendar";
import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    SharedModule,
    CalendarModule
  ],
  providers: [
    EventService
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
