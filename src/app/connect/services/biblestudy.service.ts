import { Injectable } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';
import { ConnectConstant } from '../connect.constant';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class BiblestudyService {

  allBibleStudies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private pdfFileType = 'application/pdf';

  constructor(private helperService: HelperService,
    private http: HttpClient,
    private inAppBrowser: InAppBrowser) { }

  fetchAllStudies() {
    const url = this.helperService.getResourceUrl(ConnectConstant.BIBLE_STUDY_URL, false);
    return this.http.get<any[]>(url);
  }

  getImage(imgUrl) {
    return environment.IMG_URL + imgUrl;
  }

  downloadAndOpenPdf(url, name) {
    const options : InAppBrowserOptions = {
      location : 'no',//Or 'no' 
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls 
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only 
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only 
      toolbar : 'yes', //iOS only 
      enableViewportScale : 'no', //iOS only 
      allowInlineMediaPlayback : 'no',//iOS only 
      presentationstyle : 'pagesheet',//iOS only 
      fullscreen : 'yes',//Windows only    
  };
    console.log(environment.IMG_URL + url);
    const browser = this.inAppBrowser.create(environment.IMG_URL + url, '_blank');
  }
}
