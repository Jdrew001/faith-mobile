import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { CalendarComponent, DayConfig, CalendarModalOptions, CalendarComponentOptions } from 'ion2-calendar';
import { EventService } from './event.service';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { HelperService } from '../core/helper.service';
import { EventConstant } from './EventConstant';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit, OnDestroy {

  @ViewChild('cal', null) cal: CalendarComponent;
  date = null;
  events: any[] = [];
  daySelected = false;
  previousSelDate = null;
  daysConfig = [];

  constructor(private eventService: EventService,
    private navController: NavController,
    private helperService: HelperService) {
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

  initializeCalendar(data) {
    this.animateAwayDates();
    for (let i = 0; i < data.length; i++) {
      this.daysConfig.push({
        date: data[i].date,
        cssClass: 'day-style animated fadeIn faster'
      })
    }
    const options: CalendarModalOptions = {
      daysConfig: this.daysConfig,
      canBackwardsSelected: true
    };
    this.cal.options = options;
  }

  animateAwayDates() {
    console.log(this.daysConfig.length);
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

  navigationToDetail(url) {
    this.navController.navigateForward(url);
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
