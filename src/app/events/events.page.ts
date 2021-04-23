import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { CalendarComponent, DayConfig, CalendarModalOptions, CalendarComponentOptions, CalendarComponentPayloadTypes } from 'ion2-calendar';
import { EventService } from './event.service';
import { NavController, ModalController } from '@ionic/angular';
import { HelperService } from '../core/helper.service';
import { Calendar, Detail, Event } from './event.model';
import * as moment from 'moment';
import { DateUtils, Frequency } from './utils/date.utils';
import { EventConstant } from './EventConstant';
import { EventDetailsPage } from './event-details/event-details.page';


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
  calendarItems: Array<Calendar>
  tempCalItems: Array<Calendar>;

  private _activeMonth: number;
  set activeMonth(val: CalendarComponentPayloadTypes | Date) { this._activeMonth =  moment(val).month() +1;}
  get activeMonth() { return this._activeMonth; }

  private _activeYear: number;
  set activeYear(val: CalendarComponentPayloadTypes | Date) { this._activeYear =  moment(val).year();}
  get activeYear() { return this._activeYear; }

  constructor(private eventService: EventService,
    private navController: NavController,
    private helperService: HelperService,
    private modalCtrl: ModalController,
    private dateUtils: DateUtils) {
  }

  ngOnInit() {
    this.fetchCalendar();
  }

  ngOnDestroy() {

  }

  fetchCalendar() {
    this.eventService.fetchCalendar().subscribe(res => {
      this.calendarItems = res;
      this.tempCalItems = res;
      this.initializeCalendar(this.calendarItems);
      this.getMonthEvents();
    });
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

    cals.forEach(item => {
        // remove any cancelled items
        this.updateAllDatesFromCancelled(item);
        item.details.forEach(d => {
        initializeCalendar(cals: Calendar[]) {
        this.daysConfig.push({
          date: d.date,
          cssClass: 'day-style animated fadeIn faster'
        });
      });
    });
    const options: CalendarModalOptions = {
      daysConfig: this.daysConfig,
      canBackwardsSelected: true,
      showAdjacentMonthDay: false
    };
    this.cal.options = options;
    this.activeMonth = this.cal.getViewDate();
    this.activeYear = this.cal.getViewDate();
  }

  onNext() {
    this.cal.next();
    this.activeMonth = this.cal.getViewDate();
    this.activeYear = this.cal.getViewDate();
    this.getMonthEvents();
  }

  onPrev() {
    this.cal.prev();
    this.activeMonth = this.cal.getViewDate();
    this.activeYear = this.cal.getViewDate();
    this.getMonthEvents();
  }

  onSelect(date) {
    if (this.previousSelDate === date) {
      this.previousSelDate = null;
      this.unSelectDate();
      return;
    }

    // if a date is selected in the previous month or next month change to that month
    this.cal.setViewDate(date);
    this.getDayEvents(date);
    this.previousSelDate = date;
  }

  unSelectDate() {
    this.tempCalItems = this.calendarItems;
    this.daySelected = false;
    this.date = null;
    this.getMonthEvents();
  }

  onChangeMonth(e) {
    this.activeMonth = new Date(e['newMonth']['dateObj']);
    this.activeYear = new Date(e['newMonth']['dateObj']);
    this.unSelectDate();
  }

  async navigationToDetail(obj) {
    const modal = await this.modalCtrl.create({
      component: EventDetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'calendar': obj,
        'activeMonth': this.activeMonth,
        'activeYear': this.activeYear
      }
    });
    return await modal.present();
  }

  getEmptyImage() {
    return this.helperService.getResourceUrl(EventConstant.EMPTY_EVENT_IMAGE, true);
  }

  private getDayEvents(date) {
    this.tempCalItems = this.calendarItems.filter(x => {
      return x.allDates.find(i => i === date);
    });
  }

  private getMonthEvents() {
    this.tempCalItems = this.calendarItems.filter(x => {
      return x.allDates.find(i => (moment(i).month() + 1) == this.activeMonth && (moment(i).year()) == this.activeYear);
    });
  }

  private updateAllDatesFromCancelled(val: Calendar) {
    val.cancelledDates.forEach(item => {
      let index = val.allDates.findIndex(x => x == moment(item['date']).format('YYYY-MM-DD'));
      index != -1 ? val.allDates.splice(index, 1): '';
    });

    val.details = val.details.filter(x => !x.isCancelled);
  }

}
