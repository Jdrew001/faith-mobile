import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Event } from '../event.model';
import { EventConstant } from '../EventConstant';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit, OnDestroy {

  details: Event = null;
  @Input() event: Event;
  type: string;
  typeConstant = EventConstant.EVENT_TYPES;

  constructor(private eventService: EventService,
    private actRoute: ActivatedRoute,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.type = this.event.calendar_type;
    this.details = this.event;
  }

  dismissPage() {
    this.modalCtrl.dismiss();
    this.details = null;
  }

  ngOnDestroy() {
    this.eventService.event$.next(null);
  }

}
