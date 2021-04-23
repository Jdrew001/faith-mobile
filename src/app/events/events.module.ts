import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { SharedModule } from '../shared/shared.module';
import { CalendarModule } from "ion2-calendar";
import { EventService } from './event.service';
import { EventDetailsPage } from './event-details/event-details.page';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import { EventDetailsPageModule } from './event-details/event-details.module';
import { DateUtils } from './utils/date.utils';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    EventDetailsPageModule,
    SharedModule,
    CalendarModule
  ],
  providers: [
    EventService,
    DateUtils
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}