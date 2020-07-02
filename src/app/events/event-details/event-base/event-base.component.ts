import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';
import moment from 'moment';
import marked from 'marked';
import { Event, Item } from '../../event.model';

@Component({
  selector: 'app-event-base',
  templateUrl: './event-base.component.html',
  styleUrls: ['./event-base.component.scss'],
})
export class EventBaseComponent implements OnInit {

  @Input('details') details: Event;
  public childDetails: Item[];

  constructor(
    protected sharedService: SharedService,
    protected helperService: HelperService
    ) { }

  ngOnInit() {}

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
