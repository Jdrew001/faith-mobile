import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {

  private shouldLoadSubject: Subject<boolean> = new Subject();
  shouldLoad$ = this.shouldLoadSubject.asObservable();

  constructor() { }

  toggleLoader(shouldLoad) {
    this.shouldLoadSubject.next(shouldLoad);
  }
}
