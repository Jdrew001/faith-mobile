import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../event.model';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';
import * as moment from 'moment';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.scss'],
})
export class EventSingleComponent implements OnInit {

  @Input('details') details: Event;
  placeHolderImg = '';

  constructor(
    private sharedService: SharedService,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);
  }

  getImage(imgUrl) {
    return this.sharedService.getImage(imgUrl);
  }

  convertToLocalTime(item) {
    console.log(item);
    return item.date ? moment(new Date(item.date), 'HH:mm').zone("America/Chicago").format('hh:mm A') : null;
  }

  convertToLocalDate(item) {
    console.log(item);
    return item.date ? moment(item.date).format('dddd, MMMM Do YYYY') : null;//test
  }

}
