import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ModalController, Platform } from '@ionic/angular';
import { ToastService } from '../core/services/toast.service';
import { CreditCardService } from '../shared/services/credit-card.service';
import { SharedService } from '../shared/shared.service';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { GiveConstants } from './GiveConstants';
import { GivingConst } from './models/give.const';
import { GiveFormValidator } from './utils/GiveValidator';

@Component({
  selector: 'app-give',
  templateUrl: './give.page.html',
  styleUrls: ['./give.page.scss'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class GivePage implements OnInit, DoCheck {

  giveValidator = new GiveFormValidator();
  activeFormIndex: number = 0;
  grandTotal: number = 0;
  isFeeCovered: boolean = false;
  isRememberChecked: boolean = false;
  formSubmitted = false;
  cardForm: FormGroup = new FormGroup({
    card: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.required]),
    expiration: new FormControl('', [Validators.required])
  })
  giveForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(14)]),
    tithe: new FormControl(0),
    offeringArray: new FormArray([]),
    feeCover: new FormControl(false),
  }, [this.giveValidator.oneRequired]);

  get offeringArray() {
    return this.giveForm.get('offeringArray') as FormArray;
  }

  get cardControl() { return this.cardForm.controls['card'] }
  get expControl() { return this.cardForm.controls['expiration'] }
  get cvvControl() { return this.cardForm.controls['cvv'] }

  get giveControls() {
    return {
      email: this.giveForm.get('email'),
      firstName: this.giveForm.get('firstName'),
      lastName: this.giveForm.get('lastName'),
      phone: this.giveForm.get('phone'),
      tithe: this.giveForm.get('tithe'),
      offeringArray: this.giveForm.get('offeringArray'),
      feeCover: this.giveForm.get('feeCover')
    }
  }

  get offeringCategories() {
    return GivingConst.OFFERING_CATEGORIES;
  }

  constructor(
    private platform: Platform,
    private creditCardService: CreditCardService,
    private toastService: ToastService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log('cc', );
  }

  ngDoCheck() {
    const titheAmount = this.giveControls.tithe;
    this.grandTotal = this.calculateTotal(titheAmount, this.offeringArray);
  }

  retrieveMode() {
    return this.platform.is("ios") ? "ios": "md";
  }

  async addPaymentDetails() {
    await this.navigationToDetail();
  }

  addToArray() {
    const formArr = this.giveControls.offeringArray as FormArray;
    formArr.push(new FormGroup({
      offering: new FormControl(0),
      offeringCategory: new FormControl(null),
      otherOffering: new FormControl(null)
    }, [this.giveValidator.offeringRequired, this.giveValidator.validateOffering, this.giveValidator.validateOfferingOther]));
  }

  popFromArray() {
    const formArr = this.giveControls.offeringArray as FormArray;
    formArr.removeAt(formArr.length - 1);
    this.checkFormArrSel(formArr);
  }

  onChange(e) {
    console.log('test', e);
    const formArr = this.giveControls.offeringArray as FormArray;
    this.checkFormArrSel(formArr);
  }

  isOtherSelected(item) {
    return item && item.controls['offeringCategory'].value === 'Other';
  }

  checkFormArrSel(formArr) {
    if (formArr.length === 0) {
      this.offeringCategories.forEach(val => val.disabled = false);
    } else {
      this.offeringCategories.forEach(val => val.disabled = false);
      formArr.value.forEach(element => {
        let item =this.offeringCategories.find(x => x.value === element['offeringCategory']);
        if (item && item.value !== 'Other') {
          item.disabled = true;
        }
      });
    }
  }

  proceedToCard() {
    this.formSubmitted = true;
    if (this.giveForm.valid) {
      this.activeFormIndex = 1;
    } else {
      this.toastService.presetToast('Please fill in all required fields', 'danger');
    }
  }

  cancelFromCard() {
    this.activeFormIndex = 0;
    console.log('log', this.giveForm);
  }

  submitTransaction() {
    let data = {
      cardDetails: this.cardForm.getRawValue(),
      giverDetails: this.giveForm.getRawValue()
    }

    // todo: encrypt for backend
    console.log('data', data);
  }

  async navigationToDetail(obj = null) {
    const modal = await this.modalCtrl.create({
      component: PaymentDetailsComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        giveForm: this.giveForm,
        cardForm: this.cardForm
      }
    });
    return await modal.present();
  }

  private calculateTotal(tithe, offering: FormArray) : number {
    let offeringTotal = 0;
    let newTithe = tithe.value;
    if (typeof tithe.value === 'string') {
      newTithe = +newTithe.split("$").join("").split(",").join("")
    }
    //let numTithe = tithe.value.split("$").join("").split(",").join("");
    offering.controls.forEach(val => {
      if (typeof val.get('offering').value === 'string') {
        let newOfferingVal = val.get('offering').value;
        newOfferingVal = +newOfferingVal.split("$").join("").split(",").join("");
        offeringTotal += newOfferingVal;
      } else {
        offeringTotal += val.get('offering').value;
      }
    });

    if (this.isFeeCovered && (newTithe + offeringTotal) !== 0) {
      return +(newTithe + offeringTotal + (((newTithe + offeringTotal) * GiveConstants.RATE_FEE.rate) + 0.30)).toFixed(2);
    }

    return newTithe + offeringTotal;
  }
}
