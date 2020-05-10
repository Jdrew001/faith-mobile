import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SocialService } from './services/social.service';
import { BiblestudyService } from './services/biblestudy.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segments = [{name: 'Social Media', value: 0}, {name: 'Bible Studies', value: 1}];
  segment = 0;
  fbFeedData: any[] = [];
  bStudies: any[] = [];
  scrolling;
  view;
  options = {
    autoHeight: true
  }

  constructor(private socialService: SocialService, private bibleStudyService: BiblestudyService) { }

  ngOnInit() {
    this.socialService.fetchFBFeed().subscribe(val => this.fbFeedData = val['posts']);
    this.bibleStudyService.fetchAllStudies().subscribe(val => this.bStudies = val);
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
