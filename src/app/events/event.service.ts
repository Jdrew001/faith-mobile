import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../core/helper.service';
import * as moment from 'moment';
import { EventConstant } from './EventConstant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  event$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  event_day$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient, private helperService: HelperService) { }

  fetchEventsByMonth(date) {
    const url = this.helperService.getResourceUrl(EventConstant.EVENT_URL + this.getMonthFilter(date));
    this.httpClient.get(url).subscribe(val => this.events$.next(val as any[]));
  }

  fetchEventByDate(date) {
    const url = this.helperService.getResourceUrl(EventConstant.EVENT_URL + this.getDayFilter(date));
    this.httpClient.get(url).subscribe(val => this.event_day$.next(val as any[]));
  }

  fetchEvent(id) {
    const url = this.helperService.getResourceUrl(`${EventConstant.EVENT_URL}/${id}`, false);
    return this.httpClient.get<any>(url).subscribe(val => this.event$.next(val));
  }

  private getMonthFilter(date) {
    return '?_sort=date:ASC&date_gte=' + moment(date).startOf('month').format(EventConstant.DATE_FORMAT) +
      '&date_lt=' + moment(date).add(1, 'M').startOf('month').format(EventConstant.DATE_FORMAT);
  }

  private getDayFilter(date) {console.log(moment(date).startOf('day').format(EventConstant.DATE_FORMAT));
    return '?_sort=date:asc&date_gte=' + moment(date).startOf('day').format(EventConstant.DATE_FORMAT) +
      '&date_lt=' + moment(date).add(1,'days').startOf('day').format(EventConstant.DATE_FORMAT)
  }
}
