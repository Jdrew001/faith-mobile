import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-detail',
  templateUrl: './nav-detail.component.html',
  styleUrls: ['./nav-detail.component.scss']
})
export class NavDetailComponent implements OnInit {

  @Input('title') title;
  @Output('dismiss') dismiss: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  dismissPage() {
    this.dismiss.emit(true);
  }

}
