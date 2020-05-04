import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrayerRequestFormService } from './prayer-request.form.service';
import { EmailService } from '../core/services/email.service';
import { ToastController } from '@ionic/angular';
import { LoaderService } from '../core/loader/loader.service';

@Component({
  selector: 'app-prayer-requests',
  templateUrl: './prayer-requests.page.html',
  styleUrls: ['./prayer-requests.page.scss'],
  providers: [PrayerRequestFormService]
})
export class PrayerRequestsPage implements OnInit {

  formGroup: FormGroup;

  constructor(private prayerRequestFormService: PrayerRequestFormService, private emailService: EmailService, private toastController: ToastController, private loaderService: LoaderService) { }

  ngOnInit() {
    this.formGroup = this.prayerRequestFormService.createPRForm();
  }

  submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.loaderService.toggleLoader(true);
      this.emailService.sendEmail(this.prayerRequestFormService.firstnameVal, this.prayerRequestFormService.lastnameVal,
        this.prayerRequestFormService.emailVal, this.prayerRequestFormService.phoneVal, this.prayerRequestFormService.notesval).then(res => {
          this.presentToast('Successfully submitted prayer request', 'success');
          this.loaderService.toggleLoader(false);
          this.formGroup.reset();
        }, err => this.presentToast('An error has occurred', 'danger'));
      return;
    }

    this.presentToast('Please fill in all fields', 'danger');
  }

  reset() {
    this.formGroup.reset();
  }

  private presentToast(msg?, type?) {
    this.toastController.create({
        message: msg,
        duration: 2000,
        color: type
    }).then(val => val.present());
  }
}
