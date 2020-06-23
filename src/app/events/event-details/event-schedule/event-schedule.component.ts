import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';
import * as moment from 'moment';
import marked from 'marked';
import { Event, Schedule } from '../../event.model';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss'],
})
export class EventScheduleComponent implements OnInit {

  childDetails: Schedule[];
  @Input('details') details: Event;
  placeHolderImg = '';

  constructor(
    private sharedService: SharedService,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);
    this.childDetails = this.details.schedule;
  }

  getImage(imgUrl) {
    return this.sharedService.getImage(imgUrl);
  }

  convertToLocalTime(item) {
    return item.date ? moment(new Date(item.date), 'HH:mm').zone("America/Chicago").format('hh:mm A') : null;
  }

  convertToLocalDate(item) {
    return item.date ? moment(item.date).format('dddd, MMMM Do YYYY') : null;
  }

  getConvertedToHtml(item) {
    return marked(item);
  }

  getUpcomingEvents() {
    let events = [];
    if (this.childDetails) {
      events = this.childDetails.filter(x => {
        return moment(new Date()).diff(x.date) <= 0;
      });

      return events;
    }
  }

  getRecentEvents() {
    let events = [];
    if (this.childDetails) {
      events = this.childDetails.filter(x => {
        return moment(new Date()).diff(x.date) > 0;
      });

      return events;
    }
  }

}
