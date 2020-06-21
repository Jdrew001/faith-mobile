import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit, OnDestroy {

  details = null;
  @Input() params: string;

  constructor(private eventService: EventService,
    private actRoute: ActivatedRoute,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    const id = this.params.split('/')[1];
    this.eventService.fetchEvent(id);
    this.eventService.event$.subscribe(val => this.details = val);
  }

  dismissPage() {
    this.modalCtrl.dismiss();
    this.details = null;
  }

  ngOnDestroy() {
    this.eventService.event$.next(null);
  }

}
