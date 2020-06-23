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
import { EventSingleComponent } from './event-details/event-single/event-single.component';
import { EventScheduleComponent } from './event-details/event-schedule/event-schedule.component';
import { EventMultiComponent } from './event-details/event-multi/event-multi.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    SharedModule,
    CalendarModule,
    LazyLoadImageModule
  ],
  providers: [
    EventService
  ],
  declarations: [EventsPage, EventDetailsPage, EventSingleComponent, EventScheduleComponent, EventMultiComponent],
  entryComponents: [EventDetailsPage, EventSingleComponent, EventScheduleComponent, EventMultiComponent]
})
export class EventsPageModule {}
