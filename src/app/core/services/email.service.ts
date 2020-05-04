import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastController } from '@ionic/angular';
import { LoaderService } from '../loader/loader.service';

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
   console.log(template_params);
   var service_id = "gmail";
   var template_id = "app_prayer_request";
   var user_id  = 'user_XLJpTuSLCweyHSrHXUynH';
    return emailjs.send(service_id, template_id, template_params, user_id);
  }
}
