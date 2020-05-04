import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SocialService } from './services/social.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segments = [{name: 'Social', value: 0}, {name: 'Bible Studies', value: 1}, {name: 'Contact', value: 2}];
  segment = 0;
  fbFeedData: any[] = [];
  scrolling;
  view;

  constructor(private socialService: SocialService) { }

  ngOnInit() {
    this.socialService.fetchFBFeed().subscribe(val => {this.fbFeedData = val['posts']});
  }

  segmentChanged() {
    this.slider.slideTo(this.segment, 500);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
    this.view = this.segment;
  }

  onScroll(event) {
    this.scrolling = event;
  }
}
