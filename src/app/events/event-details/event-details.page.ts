import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Calendar, Event } from '../event.model';
import { EventConstant } from '../EventConstant';
import FastAverageColor from 'fast-average-color';
import { SharedService } from 'src/app/shared/shared.service';
import { Subject } from 'rxjs';
import { Frequency } from '../utils/date.utils';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit, OnDestroy {

  details: Calendar = null;
  @Input() calendar: Calendar;
  @Input() activeMonth: number;
  type: string;
  typeConstant = EventConstant.EVENT_TYPES;
  isDark = false;
  private colorSub: Subject<IFastAverageColorResult> = new Subject();

  constructor(private eventService: EventService,
    private actRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private sharedService: SharedService) { }

  ngOnInit() {
    // let that = this;
    this.details = this.calendar;
    this.type = this.calendar.repeatable === Frequency.NONE ? EventConstant.EVENT_TYPES.single : EventConstant.EVENT_TYPES.multi;
    this.getImageColor();
    this.colorSub.subscribe(val => this.isDark = val.isDark);
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
    imgObj.crossOrigin = "Anonymous";
    imgObj.src = this.sharedService.getImage(this.details.image.url);
    fac.getColorAsync(imgObj).then(val => {
      c.colorSub.next(val); 
    });
  }

}
