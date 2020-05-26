import { Component, OnInit, ViewChild } from '@angular/core';
import { SermonService } from './sermon.service';
import { Sermon, SermonData } from './sermons.model';
import * as moment from 'moment';
import { AudioPlayerService } from 'src/app/shared/services/audio-player.service';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
})
export class SermonsComponent implements OnInit {

  sermons: Sermon[] = [];
  currentPlaying: Sermon;
  tempSermons: Sermon[] = [];

  constructor(private sermonService: SermonService, private audioPlayerService: AudioPlayerService) { }

  ngOnInit() {
    this.sermonService.fetchSermons().subscribe(data => {
      this.sermons = data;
      this.tempSermons = data;
    });

    this.audioPlayerService.audioState$.subscribe(value => {
      if (!value) {
        this.currentPlaying = null;
        return;
      }

      this.currentPlaying = value;
    });
  }

  convertToLocalDate(item) {
    return item.date ? moment(item.date).format('MM/DD/YY') : null;//test
  }

  playAudio(item) {
    this.currentPlaying = item;
    this.audioPlayerService.audioPlayer$.next({data: this.sermons, currentPlaying: item});
    this.audioPlayerService.audioState$.next(item);
  }

  stopAudio() {
    this.currentPlaying = null;
    this.audioPlayerService.audioPlayer$.next(null);
    this.audioPlayerService.audioState$.next(null);
  }

  checkForPlayer(item: Sermon) {
    return this.currentPlaying ? item.id === this.currentPlaying.id : false;
  }

  searchFilter(val) {
    this.sermons = this.tempSermons;
    this.sermons = this.sermons.filter(x => x.title.toLowerCase().includes(val.toLocaleLowerCase()));
  }

  clearSearch(val) {
    console.log(val);
    this.sermons = this.tempSermons;
  }

  private retrieveIndex(item: Sermon) {
    return this.sermons.findIndex(x => x.id === item.id);
  }
}
