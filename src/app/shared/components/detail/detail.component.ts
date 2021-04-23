import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import * as moment from 'moment';
import { HelperService } from 'src/app/core/helper.service';
import { Event } from 'src/app/events/event.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input('details') details: Event;
  @Input('childdetails') childDetails: any[];
  @Input('type') type;
  placeHolderImg = '';

  constructor(private sharedService: SharedService, private helperService: HelperService) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);
  }

  getImage(imgUrl) {
    return this.sharedService.getImage(imgUrl);
  }

  dismissDetail(val) {
    this.details = null;
  }

  convertToLocalTime(item) {
    console.log(item);
    return item.date ? moment(new Date(item.date), 'HH:mm').zone("America/Chicago").format('hh:mm A') : null;
  }

  convertToLocalDate(item) {
    console.log(item);
    return item.date ? moment(item.date).format('dddd, MMMM Do YYYY') : null;//test
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
