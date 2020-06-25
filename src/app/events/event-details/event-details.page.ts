import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Event } from '../event.model';
import { EventConstant } from '../EventConstant';
import FastAverageColor from 'fast-average-color';
import { SharedService } from 'src/app/shared/shared.service';
import { Subject } from 'rxjs';

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
  isDark = false;
  private colorSub: Subject<IFastAverageColorResult> = new Subject();

  constructor(private eventService: EventService,
    private actRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private sharedService: SharedService) { }

  ngOnInit() {
    let that = this;
    this.type = this.event.calendar_type;
    this.details = this.event;
    this.getImageColor();
    this.colorSub.subscribe(val => this.isDark = val.isDark)
  }

  dismissPage() {
    this.modalCtrl.dismiss();
    this.details = null;
  }

  ngOnDestroy() {
    this.eventService.event$.next(null);
  }

  getImageColor() {
    var imgObj = new Image();
    const fac = new FastAverageColor();
    var c = this;
    imgObj.src = this.sharedService.getImage(this.event.image.url);
    imgObj.setAttribute('crossOrigin', '');
    fac.getColorAsync(imgObj).then(val => c.colorSub.next(val));
  }

}
