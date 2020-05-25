import { Component, OnInit } from '@angular/core';
import { SermonService } from './sermon.service';
import { Sermon } from './sermons.model';
import * as moment from 'moment';
import { AudioPlayerService } from 'src/app/shared/services/audio-player.service';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
})
export class SermonsComponent implements OnInit {

  sermons: Sermon[] = [];

  constructor(private sermonService: SermonService, private audioPlayerService: AudioPlayerService) { }

  ngOnInit() {
    this.sermonService.fetchSermons().subscribe(data => {
      this.sermons = data;
    });
  }

  convertToLocalDate(item) {
    return item.date ? moment(item.date).format('MM/DD/YY') : null;//test
  }

  playAudio(item) {
    this.audioPlayerService.audioPlayer$.next(item);
  }

}
