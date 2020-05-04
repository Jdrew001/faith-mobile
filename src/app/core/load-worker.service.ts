import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadWorkerService {

  public announcementLoad$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }
}
