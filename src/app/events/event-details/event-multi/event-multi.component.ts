import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Item, Event } from '../../event.model';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'app-event-multi',
  templateUrl: './event-multi.component.html',
  styleUrls: ['./event-multi.component.scss'],
})
export class EventMultiComponent implements OnInit {

  childDetails: Item[];
  @Input('details') details: Event;
  placeHolderImg = '';

  constructor(
    private sharedService: SharedService,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);
    this.childDetails = this.details.items;
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
