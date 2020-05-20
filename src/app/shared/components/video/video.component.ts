import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { IonRange } from '@ionic/angular';
import * as screenfull from 'screenfull';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, AfterViewInit {

  @Input('video') video: string;
  @Input('poster') poster: string;
  @Input('platform') platform: string;
  @ViewChild('player', { static: false }) player: ElementRef;
  @ViewChild('range', { static: false }) range: IonRange;
  @ViewChild('container', { static: false }) container: ElementRef;
  @Output() fullScreen$: EventEmitter<boolean> = new EventEmitter<boolean>();
  progress = 0;
  fullScreen = false;
  videoPlaying = false;
  muted = true;
  videoTimer;

  constructor(private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    if (this.player) {
      this.player.nativeElement.muted = true;
    }
  }

  playVideo() {
    if (this.player.nativeElement.paused) {
      this.player.nativeElement.play();
      this.videoPlaying = true;
      clearTimeout(this.videoTimer);
      this.updateTime();
    }
  }

  pauseVideo() {
    if (!this.player.nativeElement.paused) {
      this.player.nativeElement.pause();
      this.videoPlaying = false;
      clearTimeout(this.videoTimer);
    }
  }

  volumeUpdate() {
    const muted = this.player.nativeElement.muted;
    this.player.nativeElement.muted = muted ? false : true;
    this.muted = this.player.nativeElement.muted;
  }

  openFullscreen() {
    if (screenfull.isEnabled) {
      this.fullScreen = true;
      screenfull.request(this.player.nativeElement);
    }

    setTimeout(() => {
      this.fullScreen$.emit(true);
    }, 200);
  }

  contractFullscreen() {
    this.fullScreen$.emit(false);
    setTimeout(() => {
      if (document['exitFullscreen']) {
        document['exitFullscreen']()
      } else if (document['webkitCancelFullscreen']) {
        document['webkitCancelFullscreen']();
        document['exitFullscreen']()
      }
      this.fullScreen = false;
    }, 200);
  }

  seek() {
    const newVal = +this.range.value;
    const duration = this.player.nativeElement.duration;
    this.player.nativeElement.currentTime = duration * (newVal / 100);
    this.updateTime();
    this.player.nativeElement.play();
    this.videoPlaying = true;
  }

  pauseForDrag() {
    this.player.nativeElement.pause();
    clearTimeout(this.videoTimer);
  }

  updateTime() {
    if (this.player) {
      const seek = this.player.nativeElement.currentTime;
      const vid = this.player.nativeElement;
      this.progress = (seek / this.player.nativeElement.duration) * 100 || 0;
      if (this.progress === 100) {
        vid.pause();
        vid.currentTime = 0;
        this.videoPlaying = false;
        this.progress = 0;
        clearTimeout(this.videoTimer);
        return;
      }

      this.videoTimer = setTimeout(() => {
        this.updateTime();
      }, 50);
    }
  }

  /**
   * IOS Specific functions
   */

  iosFullScreenStart(e) {
    setTimeout(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }, 200);
  }
  
  iosFullScreenEnd(e) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
