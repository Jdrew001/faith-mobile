import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { IonSlides, PopoverController } from '@ionic/angular';
import { SocialService } from './services/social.service';
import { BiblestudyService } from './services/biblestudy.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PopoverComponent } from '../shared/components/popover/popover.component';
import { SharedService } from '../shared/shared.service';
import { combineLatest } from 'rxjs';
import { Preacher, Tags } from './components/sermons/sermons.model';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit, OnDestroy {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segments = [{name: 'Sermons', value: 0}, {name: 'Bible Studies', value: 1}];
  segment = 0;
  fbFeedData: any[] = [];
  bStudies: any[] = [];
  scrolling;
  view;
  options = {
    autoHeight: true,
    allowTouchMove: false
  }
  showList = false;

  constructor(private socialService: SocialService,
    private bibleStudyService: BiblestudyService,
    private screenOrientation: ScreenOrientation,
    public popoverController: PopoverController,
    private sharedService: SharedService) { }

  ngOnInit() {
    //this.screenOrientation.unlock();
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

  initiateOrentation(val) {
    val ? this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE) :
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    setTimeout(() => {
      this.showList = true;
    }, 200);
  }

  ngOnDestroy() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
