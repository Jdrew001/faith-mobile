import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailsPageRoutingModule } from './event-details-routing.module';

import { EventDetailsPage } from './event-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventSingleComponent } from './event-single/event-single.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';
import { EventMultiComponent } from './event-multi/event-multi.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { EventBaseComponent } from './event-base/event-base.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LazyLoadImageModule,
    EventDetailsPageRoutingModule
  ],
  declarations: [EventDetailsPage, EventSingleComponent, EventScheduleComponent, EventMultiComponent, EventBaseComponent],
  entryComponents: [EventDetailsPage]
})
export class EventDetailsPageModule {}
