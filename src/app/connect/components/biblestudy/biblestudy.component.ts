import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BiblestudyService } from '../../services/biblestudy.service';
import { HelperService } from 'src/app/core/helper.service';
import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.component.html',
  styleUrls: ['./biblestudy.component.scss'],
})
export class BiblestudyComponent implements OnInit {

  @Input('data') data: any[];
  placeHolderImg = '';

  constructor(private bibleStudyService: BiblestudyService,
    private helperService: HelperService, private inAppBrowser: InAppBrowser, private toastController: ToastController ) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true)
  }

  getImage(imgUrl) {
    return this.bibleStudyService.getImage(imgUrl);
  }

  viewFile(item) {
    const url = item.file.url;
    const fileName = item.file.name;
    console.log(url);
    const browser = this.inAppBrowser.create(environment.IMG_URL + url, '_blank');
    this.toastController.create({
      message: ' This is firing',
      duration: 20000,
      color: 'danger'
    }).then(val => val.present());
  }
}
