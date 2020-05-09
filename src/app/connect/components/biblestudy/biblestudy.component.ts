import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BiblestudyService } from '../../services/biblestudy.service';
import { HelperService } from 'src/app/core/helper.service';
import { environment } from 'src/environments/environment';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.component.html',
  styleUrls: ['./biblestudy.component.scss'],
})
export class BiblestudyComponent implements OnInit {

  @Input('data') data: any[];
  placeHolderImg = '';

  constructor(private bibleStudyService: BiblestudyService,
    private helperService: HelperService, private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true)
  }

  getImage(imgUrl) {
    return this.bibleStudyService.getImage(imgUrl);
  }

  viewFile(item) {
    const url = item.file.url;
    const fileName = item.file.name;
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
    const browser = this.inAppBrowser.create('www.google.com', '_system');
  }
}
