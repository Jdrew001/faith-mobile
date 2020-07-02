import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { CalendarComponent, DayConfig, CalendarModalOptions, CalendarComponentOptions } from 'ion2-calendar';
import { EventService } from './event.service';
import * as moment from 'moment';
import { NavController, ModalController } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { HelperService } from '../core/helper.service';
import { EventConstant } from './EventConstant';
import { EventDetailsPage } from './event-details/event-details.page';
import { Event } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit, OnDestroy {

  @ViewChild('cal', null) cal: CalendarComponent;
  date = null;
  events: Event[] = [];
  daySelected = false;
  previousSelDate = null;
  daysConfig = [];

  constructor(private eventService: EventService,
    private navController: NavController,
    private helperService: HelperService,
    private modalCtrl: ModalController) {
    this.eventService.events$.subscribe(data => {
      this.events = data;
      this.initializeCalendar(data);
    });
    this.eventService.event_day$.subscribe(data => {
      this.events = data;
    });
  }

  ngOnInit() {
    this.getMonthEvents(new Date());
  }

  onSelect(date) {
    if (this.previousSelDate === date) {
      this.previousSelDate = null;
      this.unSelectDate();
      return;
    }
    this.getDayEvents(date);
    this.previousSelDate = date;
  }

  onChangeMonth(date) {
    if (date && date.newMonth) {
      this.getMonthEvents(date.newMonth.string);
    }
  }

  onNext() {
    this.cal.next();
    this.getMonthEvents(this.cal.getViewDate());
  }

  onPrev() {
    this.cal.prev();
    this.getMonthEvents(this.cal.getViewDate());
  }

  unSelectDate() {
    this.daySelected = false;
    this.date = null;
    this.getMonthEvents(this.cal.getViewDate());
  }

  initializeCalendar(data: Event[]) {
    this.daysConfig = [];
    for (let i = 0; i < data.length; i++) {
      let val = data[i].calendar_type;
      data[i].items.forEach(item => {
        this.daysConfig.push({
          date: item.date,
          cssClass: 'day-style animated fadeIn faster'
        })
      });
    }
    const options: CalendarModalOptions = {
      daysConfig: this.daysConfig,
      canBackwardsSelected: true
    };
    this.cal.options = options;
  }

  animateAwayDates() {
    if (this.daysConfig.length > 0) {
      this.daysConfig.forEach(val => {
        setTimeout(() => {
          val.cssClass = 'day-style animated fadeOut faster'
        }, 500);
      });
      this.daysConfig = [];
    }
  }

  getTime(date) {
    return moment(date).format('hh:mm a')
  }

  getWeekDayAndDay(date) {
    return `${moment(date).format('dd')} : ${moment(date).format('DD')}`
  }

  async navigationToDetail(id) {
    const eDetail: Event = this.events.find(x => x.id === id.split('events/')[1]);
    const modal = await this.modalCtrl.create({
      component: EventDetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'event': eDetail 
      }
    });
    return await modal.present();
  }

  ngOnDestroy() {
    this.eventService.event$.next(null);
  }

  getEmptyImage() {
    return this.helperService.getResourceUrl(EventConstant.EMPTY_EVENT_IMAGE, true);
  }

  private getMonthEvents(date) {
    this.events = null;
    this.eventService.fetchEventsByMonth(date);
  }

  private getDayEvents(date) {
    this.events = null;
    this.eventService.fetchEventByDate(date);
  }

}
