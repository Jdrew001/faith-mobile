import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelperService } from '../helper.service';
import { CoreConstants } from '../CoreConstants';
import { AuthorizationService } from './authorization.service';
import { ToastService } from './toast.service';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private http: HttpClient,
    private helperService: HelperService,
    private authorizationService: AuthorizationService,
    private toastService: ToastService) {
    this.grantPermission();
    this.notificationSubscription();
  }

  grantPermission() {
    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });
  }

  notificationSubscription() {
    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        console.log('Push registration success, token: ' + token.value);
        this.authorizationService.retrieveToken().subscribe(val => {
          if (val) {
            this.sendTokenToService(token.value, val['jwt']);
          }
        });
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        console.log('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
        this.toastService.presetToast(notification.notification['body'], 'primary');
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

  private sendTokenToService(token, appToken) {
    const url = this.helperService.getResourceUrl(`${CoreConstants.PHONE_TOKEN_URL}`);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + appToken
    } 
    this.http.post(url, {Token: token}, {headers: headers}).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
