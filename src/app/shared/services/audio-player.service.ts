import { Injectable } from '@angular/core';
import { Sermon, SermonData } from 'src/app/connect/components/sermons/sermons.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  public audioPlayer$: Subject<{data: Array<Sermon>, currentPlaying: Sermon}> = new Subject();

  constructor() { }
}
