import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { Subject } from 'rxjs';

const { Network } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  networkStatus$: Subject<boolean> = new Subject<boolean>();
  constructor() {
    this.watchNetworkDisconnect();
  }

  private async watchNetworkDisconnect() {
    let handler = Network.addListener('networkStatusChange', (status) => {
      this.networkStatus$.next(status.connected);
    });
  }
}
