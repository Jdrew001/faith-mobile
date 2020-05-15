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
        query(':leave', [
          stagger(100, [
            animate('0.2s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.2s', style({ opacity: 1 }))
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
  @Input('detailPage') detailPage;
  @Output('detailNavigate') detailNavigate: EventEmitter<string> = new EventEmitter();

  constructor(private sharedService: SharedService, private helperService: HelperService) { }

  ngOnInit() {this.items = []; this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);}
  ngOnChanges(changes: SimpleChanges) {console.log(this.items);}

  toShortDescription(description) {
    var maxLength = 50;
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
    console.log('image loaded');
  }

  navToDetail(url) {
    this.detailNavigate.emit(`${this.type}/${url}`);
  }

  ngOnDestroy() {
    this.items = [];
  }
}
