import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import * as moment from 'moment';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input('details') details;
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

  convertToLocalTime() {
    return this.details.date ? moment(new Date(this.details.date), 'HH:mm').zone("America/Chicago").format('hh:mm A') : null;
  }

  convertToLocalDate() {
    return this.details.date ? moment(this.details.date).format('dddd, MMMM Do YYYY') : null;//test
  }

}
