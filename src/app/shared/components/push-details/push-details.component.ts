import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import FastAverageColor from 'fast-average-color';
import { Subject } from 'rxjs';
import { HelperService } from 'src/app/core/helper.service';
import { PushNotificationService } from 'src/app/core/services/push-notification.service';
import { SharedService } from '../../shared.service';
import { PushDetails } from './push-details.model';

@Component({
  selector: 'app-push-details',
  templateUrl: './push-details.component.html',
  styleUrls: ['./push-details.component.scss'],
})
export class PushDetailsComponent implements OnInit {

  @Input() pushDetails: PushDetails;
  isDark = false;
  private colorSub: Subject<IFastAverageColorResult> = new Subject();
  placeHolderImg = '';

  constructor(
    private modalCtrl: ModalController,
    private sharedService: SharedService,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    console.log('details', this.pushDetails);
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);
    this.getImageColor();
    this.colorSub.subscribe(val => this.isDark = val.isDark);
  }

  dismissPage() {
    this.modalCtrl.dismiss();
  }

  getImageColor() {
    var imgObj = new Image();
    const fac = new FastAverageColor();
    var c = this;
    imgObj.crossOrigin = "Anonymous";
    imgObj.src = this.sharedService.getImage(this.pushDetails.image.url);
    fac.getColorAsync(imgObj).then(val => {
      c.colorSub.next(val); 
    });
  }

  getImage(imgUrl) {
    return this.sharedService.getImage(imgUrl);
  }
}
