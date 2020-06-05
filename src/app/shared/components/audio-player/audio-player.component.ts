import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { Sermon } from 'src/app/connect/components/sermons/sermons.model';
import { Howl } from 'howler';
import { HelperService } from 'src/app/core/helper.service';
import { environment } from 'src/environments/environment';
import { IonRange } from '@ionic/angular';
import { LoaderService } from 'src/app/core/loader/loader.service';
import * as moment from 'moment';
import { AudioPlayerService } from '../../services/audio-player.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';

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
  player: MediaObject = null;
  audioTimeout = null;
  isSeeking = false;
  lastTime = 0;
  audioId = 0;

  constructor(private helperService: HelperService,
    private loaderService: LoaderService,
    private audioService: AudioPlayerService,
    private media: Media) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sermon']) {
      if (this.sermon) {
        if (this.player) {
          this.player.stop();
        }
        this.start(this.sermon);
      } else {
        this.endAudio(true);
      }
    }
  }

  start(sermon: Sermon) {
    this.player = this.media.create(this.getFile(sermon.audio.url));
    const iosOptions = {
      numberOfLoops: 0,
      playAudioWhenScreenIsLocked: true
    };
    this.openSubscriptions();
    this.player.play(iosOptions);
    this.audioPlaying = true;
    this.loaderService.toggleLoader(true);
    this.audioStartProgress = '00:00';
    this.audioDuration = '00:00';

    this.updateProgress();
  }

  updateProgress() {
    let that = this;
    this.audioTimeout = setInterval(() => {
      if (this.audioPlaying || !this.isSeeking) {
        if (that.player.getDuration() !== -1) {
          this.loaderService.toggleLoader(false);
          let duration = moment.duration(that.player.getDuration(), 'seconds');
          this.audioDuration = `${duration.hours() == 0 ? '' : duration.hours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ':'}${duration.minutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${duration.seconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
          this.player.getCurrentPosition().then(val => {
            let dur = that.player.getDuration();
            if (val !== -1) {
              let value = val;
              this.progress = value >= dur ? dur : (value / that.player.getDuration()) * 100;
              that.audioStartProgress = this.toHHMMSS(value >= dur ? dur : value, dur);
            }
          });
        }
      }
    }, 1000);
  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.getDuration() * 1000;
    let seek = duration * (newValue / 100);
    this.player.seekTo(seek);
    this.progress = (seek / duration) * 100;
    this.isSeeking = false;

    if (seek >= duration) {
      this.endAudio();
    } else {
      this.updateProgress();
    }
  }

  pauseForDrag() {
    this.isSeeking = true;
    clearTimeout(this.audioTimeout);
  }

  playAudio() {
    if (!this.audioPlaying) {
      this.player.play();
      this.audioPlaying = true;
    }
  }

  pauseAudio() {
    if (this.audioPlaying) {
      this.player.pause();
      this.audioPlaying = false;
    }
  }

  nextAudio() {
    this.player.stop();
    this.player.release();
    this.next$.next(true);
    this.progress = 0;
    this.audioStartProgress = '';
    this.audioDuration = '';
    clearTimeout(this.audioTimeout);
  }

  previousAudio() {
    this.player.stop();
    this.player.release();
    this.back$.next(true);
    this.progress = 0;
    this.audioStartProgress = '';
    this.audioDuration = '';
    clearTimeout(this.audioTimeout);
  }

  closePlayer() {
    clearTimeout(this.audioTimeout);
    this.closed$.next(true);
    this.audioService.audioState$.next(null);
    this.player.stop();
    this.player.release();
    this.audioPlaying = false;
    this.progress = 0;
    this.audioStartProgress = '';
    this.audioDuration = '';
  }

  minimizePlayer() {
    this.isMinimized = true;
    this.minimized$.next(true);
  }

  maximizePlayer() {
    this.isMinimized = false;
    this.minimized$.next(false);
  }

  endAudio(animate = false) {
    // reset to beginning
    this.progress = 0;
    if (this.player) {
      this.player.release();
    }
    if (animate) {
      this.audioService.audioState$.next(null);
      this.closed$.next(true);
    }
    this.audioStartProgress = '00:00';
    this.audioDuration = '00:00';
    clearTimeout(this.audioTimeout);
  }

  getFile(url) {
    return environment.IMG_URL + url;
  }

  openSubscriptions() {
    this.player.onSuccess.subscribe(val => {
    });
    this.player.onError.subscribe(val => {
    });
    this.player.onStatusUpdate.subscribe(val => {
      if (!val) {
        this.audioPlaying = false;
        this.endAudio();
      }
    });
  }

  toHHMMSS(sec, duration) {
    let sec_num = parseInt(sec, 10); // don't forget the second parm
    let sec_duration = parseInt(duration, 10);
    let hours  = Math.floor(sec_num / 3600);
    let durHours = Math.floor(sec_duration / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    let Ohours = hours + '';
    let Ominutes = minutes + '';
    let Oseconds = seconds + '';
    if (hours < 10) {
        Ohours = "0" + hours;
    }
    if (minutes < 10) {
        Ominutes = "0" + minutes;
    }
    if (seconds < 10) {
        Oseconds = "0" + seconds;
    }
    var time = '';
    if (durHours !== 0 && durHours !== -1) {
      time = Ohours + ':' + Ominutes + ':' + Oseconds;
    } else {
      time = Ominutes + ':' + Oseconds;
    }
    return time;
  }

}
