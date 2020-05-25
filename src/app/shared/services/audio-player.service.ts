import { Injectable } from '@angular/core';
import { Sermon } from 'src/app/connect/components/sermons/sermons.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  public audioPlayer$: Subject<Sermon> = new Subject();

  constructor() { }
}
