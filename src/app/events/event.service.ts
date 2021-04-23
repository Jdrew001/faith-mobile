import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../core/helper.service';
import * as moment from 'moment';
import { EventConstant } from './EventConstant';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Calendar, Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events$: Subject<any[]> = new Subject<any[]>();
  event$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  event_day$: Subject<any[]> = new Subject<any[]>();

  constructor(private httpClient: HttpClient, private helperService: HelperService) { }

  fetchCalendar(): Observable<Array<Calendar>> {
    const url = this.helperService.getCMSResource(EventConstant.CALENDAR_URL);
    return this.httpClient.get(url) as Observable<Array<Calendar>>;
  }

  fetchEventsByMonth(date) {
    const url = this.helperService.getResourceUrl(EventConstant.EVENT_URL + this.getMonthFilter(date));
    this.httpClient.get(url).subscribe(val => this.events$.next(val as Event[]));
  }

  fetchEventByDate(date) {
    const url = this.helperService.getResourceUrl(`${EventConstant.EVENT_DAY_URL}`);
    const body = {
      month: moment(date).format(EventConstant.MONTH_FORMAT),
      year: moment(date).format(EventConstant.YEAR_FORMAT),
      date: date
    };
    this.httpClient.post(url, body).subscribe(val => this.event_day$.next(val as Event[]));
  }

  fetchEvent(id) {
    const url = this.helperService.getResourceUrl(`${EventConstant.EVENT_URL}/${id}`, false);
    return this.httpClient.get<any>(url).subscribe(val => this.event$.next(val));
  }

  private getMonthFilter(date) {
    let params = `?_sort=updatedAt:ASC&month=${moment(date).format(EventConstant.MONTH_FORMAT)}&year=${moment(date).format(EventConstant.YEAR_FORMAT) }`;
    return params;
  }

  // TODO: NEED TO DO
  private getDayFilter(date) {
    let params = `?_sort=date:asc&date_gte=${moment(date).startOf('day').format(EventConstant.MONTH_FORMAT)}&date_lt=${moment(date).add(1,'days').startOf('day').format(EventConstant.YEAR_FORMAT)}`;
    return params;
  }
}
