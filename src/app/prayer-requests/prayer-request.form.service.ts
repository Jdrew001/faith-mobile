import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperService } from '../core/helper.service';

@Injectable()
export class PrayerRequestFormService {

  formGroup: FormGroup;
  get firstnameVal() { return this.formGroup.get('firstname').value; }
  get lastnameVal() { return this.formGroup.get('lastname').value; }
  get emailVal() { return this.formGroup.get('email').value; }
  get phoneVal() { return this.formGroup.get('phone').value; }
  get descriptionVal() { return this.formGroup.get('description').value; }

  constructor(
    private helperService: HelperService,
    private http: HttpClient
  ) { }

  createPRForm() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(14)]),
      description: new FormControl('', [Validators.required])
    });

    return this.formGroup;
  }

  uploadContact(body) {
    const url = this.helperService.getCMSResource('/contacts')
    return this.http.post(url, body);
  }
}
