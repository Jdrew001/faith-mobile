import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { Sermon } from 'src/app/connect/components/sermons/sermons.model';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnChanges {

  @Input('showAudio') showAudio: boolean;
  @Input('sermon') sermon: Sermon;
  @Output('closed$') closed$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('minimized$') minimized$: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('audioPlayer', { static: false }) audioPlayer: Element;
  progress = 0;
  audioPlaying = false;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      console.log(this.sermon);
    }
  }

  seek() {

  }

  pauseForDrag() {

  }

  closePlayer() {
    this.closed$.next(true);
  }

  minimizePlayer() {
    this.minimized$.next(true);
  }

}
