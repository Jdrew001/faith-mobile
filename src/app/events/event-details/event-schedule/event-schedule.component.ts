import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';
import * as moment from 'moment';

import { EventBaseComponent } from '../event-base/event-base.component';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss'],
})
export class EventScheduleComponent extends EventBaseComponent implements OnInit {

  constructor(
    protected sharedService: SharedService,
    protected helperService: HelperService
  ) {
    super(sharedService, helperService);
  }

  ngOnInit() {
    // this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);
    // this.childDetails = this.details.items;
  }
}
