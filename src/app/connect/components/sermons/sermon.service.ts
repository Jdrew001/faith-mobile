import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectConstant } from '../../connect.constant';
import { HelperService } from 'src/app/core/helper.service';
import { Sermon } from './sermons.model';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

export enum FilterType {
  preachers,
  categories,
  dates
}

@Injectable()
export class SermonService {

  constructor(private http: HttpClient, private helperService: HelperService) { }

  fetchSermons() {
    const url = this.helperService.getResourceUrl(ConnectConstant.SERMON_URL, false);
    return this.http.get<Sermon[]>(url).pipe(map(res => res));
  }

  fetchFilteredSermons(body, date) {
    let url = this.helperService.getResourceUrl(ConnectConstant.SERMON_FILTERED_URL, false);
    if (!!date) {
      url += this.getMonthFilter(date);
    }
    return this.http.post<Sermon[]>(url, body).pipe(map(res => res));
  }

  retrieveFilters(type: FilterType, data: Sermon[]): string[] {
    let filters = [];
    switch (type) {
      case FilterType.preachers:
        filters = this.extractPreachers(data);
      break;
      case FilterType.categories:
        filters = this.extractCategories(data);
      break;
    }

    return filters;
  }

  retrieveDateFilter(data: Sermon[]): {min: string, max: string} {
    let obj = { start: '', end: '' };
    let tempDates = [];
    data.forEach(val => {
      tempDates.push(new Date(val.date));
    });
    var maxDate = new Date(Math.max.apply(null, tempDates));
    var minDate = new Date(Math.min.apply(null, tempDates));
    return {min: moment(minDate).year().toString(), max: moment(maxDate).year().toString()};
  }

  private extractPreachers(sermons: Sermon[]): Array<string> {
    let tempFilters = [];
    sermons.forEach(val => {
      if (!tempFilters.find(x => x === val.preacher.Name)) {
        tempFilters.push(val.preacher.Name);
      }
    });
    return tempFilters;
  }

  private extractCategories(sermons: Sermon[]): Array<string> {
    let tempFilters = [];
    sermons.forEach(val => {
      val.study_tags.forEach(item => {
        if (!tempFilters.find(x => x === item.name)) {
          tempFilters.push(item.name);
        }
      });
    });
    return tempFilters;
  }

  private getMonthFilter(date) {
    return '?_sort=date:ASC&date_gte=' + moment(date).startOf('month').format('YYYY-MM-DD') +
      '&date_lt=' + moment(date).add(1, 'M').startOf('month').format('YYYY-MM-DD');
  }
}
