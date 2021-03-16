import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/core/helper.service';
import * as moment from 'moment';
import marked from 'marked';
import { EventBaseComponent } from '../event-base/event-base.component';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.scss'],
})
export class EventSingleComponent extends EventBaseComponent implements OnInit {

  //item: Item;
  placeHolderImg = '';

  constructor(
    protected sharedService: SharedService,
    protected helperService: HelperService
  ) {
    super(sharedService, helperService);
  }

  ngOnInit() {
  }
}
