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
import { EmailService } from './email.service';
import { Router } from '@angular/router';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private http: HttpClient,
    private helperService: HelperService,
    private authorizationService: AuthorizationService,
    private toastService: ToastService,
    private emailService: EmailService,
    private router: Router) {
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
        this.authorizationService.retrieveToken().subscribe(val => {
          if (val) {
            this.sendTokenToService(token.value, val['jwt']);
          }
        }, err => {
          //this.emailService.sendErrorEmail(err);
        });
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        //this.navigateToApp(notification.notification.data['id']);
      }
    );
  }

  private navigateToApp(e) {
    switch (e) {
      case CoreConstants.PUSH_IDS.announcement: 
      this.router.navigate(['/announcements'])
      break;
      case CoreConstants.PUSH_IDS.event:
        this.router.navigate(['/events'])
      break
      case CoreConstants.PUSH_IDS.biblestudy:
        this.router.navigate(['/connect', { section: {id: 'biblestudy'} }])
      break;
      case CoreConstants.PUSH_IDS.sermon:
        this.router.navigate(['/connect', { section: 'sermon' }])
      break;
    }
  }

  private sendTokenToService(token, appToken) {
    const url = this.helperService.getResourceUrl(`${CoreConstants.PHONE_TOKEN_URL}`);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + appToken
    } 
    this.http.post(url, {Token: token}, {headers: headers}).subscribe(res => {
    }, err => {
      console.log(err);
    });
  }
}
