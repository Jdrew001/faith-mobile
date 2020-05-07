import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit, OnChanges, OnDestroy {

  @Input('data') data: any[];
  @Input('scrolling') scrolling;
  @Input('view') view;
  @ViewChildren('player') videoPlayers: QueryList<any>;
  currentPlaying;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    window.scrollTo(0,0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.scrolling) {
      this.viewDidScroll();
    }

    if (this.view && this.view !== 0) {
      if (this.currentPlaying) {
        this.currentPlaying.pause();
        this.currentPlaying = null;
      }
    }
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
