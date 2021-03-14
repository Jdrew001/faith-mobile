import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrayerRequestFormService } from './prayer-request.form.service';
import { EmailService } from '../core/services/email.service';
import { ToastController } from '@ionic/angular';
import { LoaderService } from '../core/loader/loader.service';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-prayer-requests',
  templateUrl: './prayer-requests.page.html',
  styleUrls: ['./prayer-requests.page.scss'],
  providers: [PrayerRequestFormService]
})
export class PrayerRequestsPage implements OnInit {

  formGroup: FormGroup;
  get firstnameVal() { return this.formGroup.get('firstname').value; }
  get lastnameVal() { return this.formGroup.get('lastname').value; }
  get emailVal() { return this.formGroup.get('email').value; }
  get phoneVal() { return this.formGroup.get('phone').value; }
  get descriptionVal() { return this.formGroup.get('description').value; }
  charactersRemaining
  data = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  };

  constructor(private prayerRequestFormService: PrayerRequestFormService,
    private emailService: EmailService,
    private toastService: ToastService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.formGroup = this.prayerRequestFormService.createPRForm();
  }

  submit() {
    if (this.formGroup.valid) {
      this.loaderService.toggleLoader(true);
      this.prayerRequestFormService.uploadContact(this.formGroup.getRawValue()).subscribe(res => {
        this.toastService.presetToast('Successfully submitted contact request', 'success');
        this.loaderService.toggleLoader(false);
        this.reset();
      });
      return;
    }

    this.toastService.presetToast('Please fill in all fields', 'danger');
  }

  reset() {
    this.formGroup.reset();
    this.formGroup.get('description').setValue('');
  }
}
