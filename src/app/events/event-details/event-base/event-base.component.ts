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
  protected childDetails: any[] = [];

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
    let eventDates = this.details.allDates.filter(x => (moment(x).month() + 1) == this.activeMonth);
    for (let i = 0; i < eventDates.length; i++) {
      let occuranceEvents = [];
      this.details.events.forEach(item => {
        let event: Event = {
          id: item.id,
          description: item.description,
          title: item.title,
          time: item.time,
          cancelledDates: item.cancelledDates,
          image: item.image,
          date: item.date
        }
        event.date = eventDates[i];
        occuranceEvents.push(event);
      });
      let occurance = {
        description: this.details.description,
        date: eventDates[i],
        occuranceEvents: occuranceEvents
      }
      this.childDetails.push(occurance);
    }
  }

  getUpcomingEvents() {
    let events = [];
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

}
