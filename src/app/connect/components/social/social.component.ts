import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChildren, QueryList, OnDestroy, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Device } from '@ionic-native/device/ngx';
import { ConnectConstant } from '../../connect.constant';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(75, [
            animate('0.500s cubic-bezier(0.35, 0, 0.25, .45)', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(75, [
            animate('0.500s cubic-bezier(0.10, 0, 0.25, .45)', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SocialComponent implements OnInit, OnChanges, OnDestroy {

  @Input('data') data: any[];
  @Input('scrolling') scrolling;
  @Input('view') view;
  @Input('show') show;
  @Output() fullscreen$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChildren('player') videoPlayers: QueryList<any>;
  currentPlaying;
  platform: string;
  showList = false;

  constructor(private device: Device) { }

  ngOnInit() {
    this.platform = ConnectConstant.DEVICE_PLATFORM[this.device.platform];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.show) {
      this.showList = true;
    }
    // if (this.scrolling) {
    //   this.viewDidScroll();
    // }

    // if (this.view && this.view !== 0) {
    //   if (this.currentPlaying) {
    //     this.currentPlaying.pause();
    //     this.currentPlaying = null;
    //   }
    // }
  }

  viewDidScroll() {
    if (this.currentPlaying && this.isElementInView(this.currentPlaying)) {
      return;
    }    
    if (this.currentPlaying && !this.isElementInView(this.currentPlaying)) {
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }

    this.videoPlayers.forEach(player => {
      const nativeElement = player.nativeElement;
      const inView = this.isElementInView(nativeElement);

      if (this.currentPlaying) {
        return;
      }

      if (inView) {
        this.currentPlaying = nativeElement;
        this.currentPlaying.muted = true;
        this.currentPlaying.play();
      }
    });
  }

  fullScreenInitiated(val) {
    this.showList = false;
    this.fullscreen$.emit(val);
  }

  getMedia(item) {
    if (item.attachments) {
      const data = item.attachments.data[0];
      return { type: data.media_type, media_source: data.media ? data.media.source : '', image: data.media ? data.media.image : '' };
    }
    return null;
  }

  isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }

  convertToLocalDate(date) {
    return date ? moment(date).format('dddd, MMMM Do YYYY') : '';
  }

  ngOnDestroy() {
    if (this.currentPlaying) {
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }
  }
}
