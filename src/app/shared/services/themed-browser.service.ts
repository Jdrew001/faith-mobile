import { Injectable } from '@angular/core';

import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';


@Injectable({
  providedIn: 'root'
})
export class ThemedBrowserService {

  constructor(private themeableBrowser: ThemeableBrowser) { }

  openBrowser(url, options) {
    this.themeableBrowser.create(url, '_blank', options);
  } 
}
