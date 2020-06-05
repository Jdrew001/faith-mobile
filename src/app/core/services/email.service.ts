import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastController } from '@ionic/angular';
import { LoaderService } from '../loader/loader.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(firstname?, lastname?, email?, phone?, notes?) {
    var template_params = {
      "firstName": firstname,
      "lastName": lastname,
      "email": email,
      "phone": phone,
      "notes": notes
   }
    var service_id = "gmail";
    var template_id = "app_prayer_request";
    var user_id  = 'user_XLJpTuSLCweyHSrHXUynH';
    return emailjs.send(service_id, template_id, template_params, user_id);
  }

  sendErrorEmail(error: HttpErrorResponse) {
    var template_params = {
      "error": error.error,
      "message": error.message,
      "name": error.name,
      "status": error.status,
      "statusText": error.statusText,
      "type": error.type
   }
    var service_id = "gmail";
    var template_id = "template_jbvb6PlN";
    var user_id  = 'user_Q6QgACfHjdJr2tUO1qwUK';
    return emailjs.send(service_id, template_id, template_params, user_id);
  }
}
