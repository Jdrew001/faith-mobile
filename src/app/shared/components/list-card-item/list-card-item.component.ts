import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { SharedService } from '../../shared.service';

enum ListType {
  announcements, events
}

@Component({
  selector: 'app-list-card-item',
  templateUrl: './list-card-item.component.html',
  styleUrls: ['./list-card-item.component.scss'],
})
export class ListCardItemComponent implements OnInit, OnChanges {

  @Input('type') type;
  @Input('items') items;
  @Input('detailPage') detailPage;
  @Output('detailNavigate') detailNavigate: EventEmitter<string> = new EventEmitter();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {console.log(this.detailPage);console.log(this.items)}
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

  navToDetail(url) {
    this.detailNavigate.emit(`${this.type}/${url}`);
  }

}
