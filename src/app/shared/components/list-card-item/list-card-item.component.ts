import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { SharedService } from '../../shared.service';
import { HelperService } from 'src/app/core/helper.service';

enum ListType {
  announcements, events
}

@Component({
  selector: 'app-list-card-item',
  templateUrl: './list-card-item.component.html',
  styleUrls: ['./list-card-item.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(75, [
            animate('0.250s cubic-bezier(0.10, 0, 0.25, .45)', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ListCardItemComponent implements OnInit, OnChanges, OnDestroy {

  hasLoaded = false;
  placeHolderImg = '';
  @Input('type') type;
  @Input('items') items;
  tempItems: Array<any> = [];
  @Input('detailPage') detailPage;
  @Output('detailNavigate') detailNavigate: EventEmitter<string> = new EventEmitter();

  constructor(private sharedService: SharedService, private helperService: HelperService) { }

  ngOnInit() {this.items = []; this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);}
  ngOnChanges(changes: SimpleChanges) {
  }

  toShortDescription(description) {
    var maxLength = 75;
    if(description.length > maxLength){
        var trimmed = description.substr(0, maxLength);
        return { isTrimmed: true, description: trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))}
    }
    return { isTrimmed: false, description: description };
  }

  getImage(imgUrl) {
    return this.sharedService.getImage(imgUrl);
  }

  showImages() {
    this.hasLoaded = true;
  }

  navToDetail(id) {
    this.detailNavigate.emit(`${this.type}/${id}`);
  }

  ngOnDestroy() {
    this.items = [];
  }
}
