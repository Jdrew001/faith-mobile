import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit, OnDestroy {

  details = null;

  constructor(private eventService: EventService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.eventService.fetchEvent(this.actRoute.snapshot.paramMap.get('id'));
    this.eventService.event$.subscribe(val => this.details = val);
  }

  dismissDetail(val) {
    this.details = null;
  }

  ngOnDestroy() {
    this.eventService.event$.next(null);
  }

}
