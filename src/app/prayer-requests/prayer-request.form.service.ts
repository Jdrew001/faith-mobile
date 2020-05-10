import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class PrayerRequestFormService {

  formGroup: FormGroup;
  get firstnameVal() { return this.formGroup.get('firstname').value; }
  get lastnameVal() { return this.formGroup.get('lastname').value; }
  get emailVal() { return this.formGroup.get('email').value; }
  get phoneVal() { return this.formGroup.get('phone').value; }
  get notesval() { return this.formGroup.get('notes').value; }

  constructor() { }

  
}
