import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { Sermon } from 'src/app/connect/components/sermons/sermons.model';
import { Howl } from 'howler';
import { HelperService } from 'src/app/core/helper.service';
import { environment } from 'src/environments/environment';
import { IonRange } from '@ionic/angular';
import { LoaderService } from 'src/app/core/loader/loader.service';
import * as moment from 'moment';
import { AudioPlayerService } from '../../services/audio-player.service';

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
  @Input('isMinimized') isMinimized: boolean;
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
  lastTime = 0;
  audioId = 0;

  constructor(private helperService: HelperService,
    private loaderService: LoaderService,
    private audioService: AudioPlayerService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sermon']) {
      if (this.sermon) {
        if (this.player) {
          this.player.stop();
        }
        this.start(this.sermon);
      } else {
        if (this.player) {
          this.player.stop(this.audioId);
        }
      }
    }
  }

  start(sermon: Sermon) {
    this.loaderService.toggleLoader(true);
    this.player = new Howl({
      src: [this.getFile(sermon.audio.url)],
      autoplay: false,
      volume: 1.0,
      html5: true,
      format: ['mp3'],
      onload: () => {
        const formattedTime = moment.duration(this.player.duration(), 'seconds');
        this.audioPlaying = true;
        this.loaderService.toggleLoader(false);
        this.updateProgress();
        this.progress = 0;
        this.audioStartProgress = '00:00';
        this.audioDuration = '00:00';
        this.audioDuration = `${formattedTime.hours() == 0 ? '' : formattedTime.hours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':'}${formattedTime.minutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${formattedTime.seconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
      },
      onplayerror: (error) => {
        console.log(error);
      },
      onloaderror: (error) => {
        this.loaderService.toggleLoader(false);
      }
    });
    this.audioId = this.player.play();
  }

  updateProgress() {
    if (this.player && !this.isSeeking && this.player.state() === 'loaded') {
        let seek = +this.player.seek() || this.lastTime;
        const formattedTime = moment.duration(seek, 'seconds');
        this.progress = (seek / this.player.duration()) * 100 || this.progress;
        this.audioStartProgress = `${formattedTime.hours() == 0 ? '' : formattedTime.hours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':'}${formattedTime.minutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${formattedTime.seconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
        this.lastTime = seek;
    }

    this.audioTimeout = setTimeout(() => {
      this.updateProgress();
    }, 1000); 
  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
    let seek = Number(this.player.seek());
    let howl = this.player.seek();
    if (isNaN(seek)) {
      seek = howl['_sounds'][0]['_seek'];
    }
    this.progress = (seek / this.player.duration()) * 100 || this.progress;
    this.updateProgress();
    this.isSeeking = false;
  }

  pauseForDrag() {
    this.isSeeking = true;
    clearTimeout(this.audioTimeout);
  }

  playAudio() {
    if (!this.player.playing(this.audioId)) {
      this.audioPlaying = true;
      this.player.play(this.audioId);
    }
  }

  pauseAudio() {
    if (this.player.playing(this.audioId)) {
      this.audioPlaying = false;
      this.player.pause(this.audioId);
    }
  }

  nextAudio() {
    this.player.stop(this.audioId);
    this.player.unload();
    this.progress = 0;
    this.audioStartProgress = '';
    this.audioDuration = '';
    this.next$.next(true);
  }

  previousAudio() {
    this.player.stop(this.audioId);
    this.player.unload();
    this.progress = 0;
    this.audioStartProgress = '';
    this.audioDuration = '';
    this.back$.next(true);
  }

  closePlayer() {
    this.closed$.next(true);
    this.audioService.audioState$.next(null);
    this.audioPlaying = false;
    this.player.stop(this.audioId);
    this.player.unload();
    this.player = null;
    this.progress = 0;
    this.audioStartProgress = '';
    this.audioDuration = '';
    clearTimeout(this.audioTimeout);
  }

  minimizePlayer() {
    this.isMinimized = true;
    this.minimized$.next(true);
  }

  maximizePlayer() {
    this.isMinimized = false;
    this.minimized$.next(false);
  }

  getFile(url) {
    return environment.IMG_URL + url;
  }

}
