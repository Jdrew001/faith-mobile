import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import marked from 'marked';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';
import { EventBaseComponent } from '../event-base/event-base.component';

@Component({
  selector: 'app-event-multi',
  templateUrl: './event-multi.component.html',
  styleUrls: ['./event-multi.component.scss'],
})
export class EventMultiComponent extends EventBaseComponent implements OnInit {

  placeHolderImg = '';

  constructor(
    protected sharedService: SharedService,
    protected helperService: HelperService
  ) {
    super(sharedService, helperService);
  }

  ngOnInit() {
    this.setUpcomingEvents();
  }
}
