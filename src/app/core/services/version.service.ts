import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HelperService } from '../helper.service';
import { UpdateModel, UpdateType } from '../models/update.model';
import { Plugins } from '@capacitor/core';
import { Market } from '@ionic-native/market/ngx';

const { Browser } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(
    private helperService: HelperService,
    private http: HttpClient,
    private alertController: AlertController,
    private platform: Platform,
    private market: Market
  ) { }

  async checkForUpdate() {
    const url = this.helperService.getResourceUrl('update');
    (this.http.get(url) as Observable<UpdateModel>).subscribe(res => {
      if (res.enabled) {
        switch (res.updateType) {
          case UpdateType.maintenance:
            this.presentAlert(res.msg.title, res.msg.msg, '', false)
          break;
          case UpdateType.requiredUpdate:
            this.presentAlert(res.msg.title, res.msg.msg, res.msg.button, false)
          break;
          case UpdateType.softUpdate:
            this.presentAlert(res.msg.title, res.msg.msg, res.msg.button, true)
          break;
        }
        
      }
    });
  }

  openAppstoreEntry() {
    if (this.platform.is('android')) {
      this.market.open('com.atkison.faithmobile');
    } else {
      this.market.open('1516886398');
    }
  }

  private async presentAlert(header, message, buttonText = '', allowClose = false) {
    const buttons = [];
    let that = this;
    if (buttonText != '') {
      buttons.push({
        text: buttonText,
        handler: () => { this.openAppstoreEntry() }
      });
    }

    if (allowClose) {
      buttons.push({
        text: 'Close',
        role: 'cancel'
      });
    }

    const alert = await this.alertController.create({
      header,
      message,
      buttons,
      backdropDismiss: allowClose,
      mode: this.platform.is('android') ? 'md': 'ios'
    });
    await alert.present();
  }
}
