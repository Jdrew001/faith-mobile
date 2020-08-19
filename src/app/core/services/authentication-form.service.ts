import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFormService {

  private loginForm: FormGroup;
  private registrationForm: FormGroup;
  private validationCodeForm: FormGroup;

  get getLoginForm() { return this.loginForm; }
  get getLoginValue() { return this.loginForm.value; }
  get getRegistrationForm() { return this.registrationForm; }
  get getRegistrationValue() { return this.registrationForm.value; }
  get getValidationCodeForm() { return this.validationCodeForm; }
  get getValidationCodeValue() { return this.validationCodeForm.value; }

  constructor() { }

  createLoginForm() {
    return this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  createRegistrationForm() {
    return this.registrationForm = new FormGroup({
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  createValidationCodeForm() {
    return this.validationCodeForm = new FormGroup({
      code: new FormControl('', Validators.required)
    });
  }

  validationConfirmPassword() {
    return this.getRegistrationForm.controls['password'].value === this.getRegistrationForm.controls['confirmPassword'].value;
  }
}
