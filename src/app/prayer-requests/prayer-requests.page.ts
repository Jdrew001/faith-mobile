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
  get notesval() { return this.formGroup.get('notes').value; }
  data = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  };

  constructor(private prayerRequestFormService: PrayerRequestFormService, private emailService: EmailService, private toastService: ToastService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.formGroup = this.createPRForm();
    this.formGroup.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  createPRForm() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required])
    });

    return this.formGroup;
  }

  submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.loaderService.toggleLoader(true);
      this.emailService.sendEmail(this.prayerRequestFormService.firstnameVal, this.prayerRequestFormService.lastnameVal,
        this.prayerRequestFormService.emailVal, this.prayerRequestFormService.phoneVal, this.prayerRequestFormService.notesval).then(res => {
          this.toastService.presetToast('Successfully submitted prayer request', 'success');
          this.loaderService.toggleLoader(false);
          this.formGroup.reset();
        }, err => this.toastService.presetToast('An error has occurred', 'danger'));
      return;
    }

    this.toastService.presetToast('Please fill in all fields', 'danger');
  }

  reset() {
    this.formGroup.reset();
  }
}
