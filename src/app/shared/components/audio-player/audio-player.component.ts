import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { Sermon } from 'src/app/connect/components/sermons/sermons.model';
import { Howl } from 'howler';
import { HelperService } from 'src/app/core/helper.service';
import { environment } from 'src/environments/environment';
import { IonRange } from '@ionic/angular';
import { LoaderService } from 'src/app/core/loader/loader.service';
import * as moment from 'moment';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnChanges {

  @Input('showAudio') showAudio: boolean;
  @Input('sermon') sermon: Sermon;
  @Input('isBack') isBack:boolean;
  @Input('isForward') isForward: boolean;
  @Output('closed$') closed$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('minimized$') minimized$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('back$') back$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('next$') next$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('audioPlayer', { static: false }) audioPlayer: Element;
  @ViewChild('range', { static: false }) range: IonRange;
  progress = 0;
  audioStartProgress = '';
  audioDuration = '';
  audioPlaying = false;
  player: Howl = null;
  audioTimeout = null;
  isSeeking = false;

  constructor(private helperService: HelperService, private loaderService: LoaderService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (this.sermon) {
        if (this.player) {
          this.player.stop();
        }
        this.start(this.sermon);
      }
    }
  }

  start(sermon: Sermon) {
    this.loaderService.toggleLoader(true);
    this.player = new Howl({
      src: [this.getFile(sermon.audio.url)],
      autoplay: true,
      volume: 1.0,
      html5: true,
      format: ['mp3'],
      onload: () => {
        const formattedTime = moment.duration(this.player.duration(), 'seconds');
        this.audioPlaying = true;
        this.updateProgress();
        this.loaderService.toggleLoader(false);
        console.log(moment.duration(this.player.duration(), 'seconds'));
        this.audioDuration = `${formattedTime.hours() == 0 ? '' : formattedTime.hours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':'}${formattedTime.minutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${formattedTime.seconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
        //console.log(moment((this.player.duration() / 60).toString(), 'HHmmss').format('HH:mm:ss'));
      },
      onloaderror: () => {
        this.loaderService.toggleLoader(false);
      },
      onend: () => {
        clearTimeout(this.audioTimeout);
        this.audioPlaying = false;
        this.progress = 0;
      }
    });
    this.player.play();
  }

  updateProgress() {
    if (this.player && !this.isSeeking) {
        let seek = +this.player.seek() || 0;
        const formattedTime = moment.duration(seek, 'seconds');
        this.progress = (seek / this.player.duration()) * 100 || this.progress;
        this.audioStartProgress = `${formattedTime.hours() == 0 ? '' : formattedTime.hours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':'}${formattedTime.minutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${formattedTime.seconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
        this.audioTimeout = setTimeout(() => {
        this.updateProgress();
      }, 1000);
    }
  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
    this.isSeeking = false;
    this.updateProgress();
  }

  pauseForDrag() {
    this.isSeeking = true;
    clearTimeout(this.audioTimeout);
  }

  playAudio() {
    this.player.play();
    this.audioPlaying = true;
  }

  pauseAudio() {
    this.player.pause();
    this.audioPlaying = false;
  }

  nextAudio() {
    this.player.stop();
    this.player.unload();
    this.next$.next(true);
  }

  previousAudio() {
    this.player.stop();
    this.player.unload();
    this.back$.next(true);
  }

  closePlayer() {
    this.closed$.next(true);
    this.audioPlaying = false;
    this.player.stop();
    this.player.unload();
    this.player = null;
    this.progress = 0;
    this.audioStartProgress = '';
    this.audioDuration = '';
    clearTimeout(this.audioTimeout);
  }

  minimizePlayer() {
    this.minimized$.next(true);
  }

  getFile(url) {
    return environment.IMG_URL + url;
  }

}
