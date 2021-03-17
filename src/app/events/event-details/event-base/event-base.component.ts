import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';
import moment from 'moment';
import marked from 'marked';
import { Calendar, Event } from '../../event.model';

@Component({
  selector: 'app-event-base',
  templateUrl: './event-base.component.html',
  styleUrls: ['./event-base.component.scss'],
})
export class EventBaseComponent implements OnInit {

  @Input('details') details: Calendar;
  @Input('activeMonth') activeMonth;
  childDetails: any[] = [];

  constructor(
    protected sharedService: SharedService,
    protected helperService: HelperService
    ) { }

  ngOnInit() {}

  getImage(imgUrl) {
    return this.sharedService.getImage(imgUrl);
  }

  convertToLocalTimeFromDate(item) {
    return item ? moment(new Date(item), 'HH:mm').zone("America/Chicago").format('hh:mm A') : null;
  }

  convertToLocalTime(item) {
    return item ? moment(item, 'HH:mm').zone("America/Chicago").format('hh:mm A') : null;
  }

  convertToLocalDate(item) {
    return item ? moment(item).format('dddd, MMMM Do YYYY') : null;
  }

  // getConvertedToHtml(item) {
  //   return marked(item);
  // }
  setUpcomingEvents() {
    let eventDates = this.details.details.filter(x => (moment(x.date).month() + 1) == this.activeMonth);
    this.childDetails = eventDates
  }

  getUpcomingEvents() {
    let events = [];
    console.log(this.childDetails)
    if (this.childDetails) {
      events = this.childDetails.filter(x => {
        return moment(new Date()).diff(x.date) <= 0;
      });
    }

    return events;
  }

  getRecentEvents() {
    let events = [];
    if (this.childDetails) {
      events = this.childDetails.filter(x => {
        return moment(new Date()).diff(x.date) > 0;
      });
    }

    return events;
  }

  private cancelEvent(date: string, item: Event) {
    let result = false;
    item && item.cancelledDates ? item.cancelledDates.forEach(obj => {
      let d = moment(obj.date).format('YYYY-MM-DD');

      result = date == d;
    }): '';

    return result;
  }

}
