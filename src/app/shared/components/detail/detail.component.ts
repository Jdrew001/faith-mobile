import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input('details') details;
  @Input('type') type;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {}

  getImage(imgUrl) {
    return this.sharedService.getImage(imgUrl);
  }

  dismissDetail(val) {
    this.details = null;
  }

  convertToLocalTime() {
    return this.details.date ? moment(new Date(this.details.date), 'HH:mm').zone("America/Chicago").format('hh:mm A') : null;
  }

  convertToLocalDate() {
    return this.details.date ? moment(this.details.date).format('dddd, MMMM Do YYYY') : null;//test
  }

}
