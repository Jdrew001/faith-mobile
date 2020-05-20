import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, NgZone, Output, EventEmitter } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, AfterViewInit {


  /**
   * TODO:
    When the event for exiting out of browser fired, then emit false.


    Remove the popup on range
   */


  @Input('video') video: string;
  @Input('poster') poster: string;
  @ViewChild('player', { static: false }) player: ElementRef;
  @ViewChild('range', { static: false }) range: IonRange;
  @Output() fullScreen$: EventEmitter<boolean> = new EventEmitter<boolean>();
  progress = 0;
  videoPlaying = false;
  muted = true;
  videoTimer;

  constructor(private zone: NgZone) { }

  ngOnInit() {}

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
    if (this.player.nativeElement.requestFullscreen) {
      this.player.nativeElement.requestFullscreen()
    } else if (this.player.nativeElement.webkitEnterFullscreen) {
      this.player.nativeElement.webkitEnterFullscreen();
      this.player.nativeElement.enterFullscreen();
    }

    this.fullScreen$.emit(true);
  }

  seek() {
    const newVal = +this.range.value;
    const duration = this.player.nativeElement.duration;
    this.player.nativeElement.currentTime = duration * (newVal / 100);
    this.updateTime();
    this.player.nativeElement.play();
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

}
