import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ModalController, Platform } from '@ionic/angular';
import { CryptService } from '../core/services/crypt.service';
import { StorageService } from '../core/services/storage.service';
import { ToastService } from '../core/services/toast.service';
import { CreditCardService } from '../shared/services/credit-card.service';
import { SharedService } from '../shared/shared.service';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { GiveConstants } from './GiveConstants';
import { GiveModel, GivingModel } from './models/card.model';
import { GivingConst } from './models/give.const';
import { GiveService } from './services/give.service';
import { GiveFormValidator } from './utils/GiveValidator';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;


declare var Stripe;

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
  saveKey = 'eData';
  activeFormIndex: number = 0;
  grandTotal: number = 0;
  isFeeCovered: boolean = false;
  isRememberChecked: boolean = false;
  formSubmitted = false;
  showActiveDetails = false;
  stripe;
  mobiletoken;
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

  get cardControls() {
    return {
      card: this.cardForm.get('card'),
      cvv: this.cardForm.get('cvv'),
      expiration: this.cardForm.get('expiration')
    }
  }

  get offeringCategories() {
    return GivingConst.OFFERING_CATEGORIES;
  }

  constructor(
    private platform: Platform,
    private creditCardService: CreditCardService,
    private toastService: ToastService,
    private modalCtrl: ModalController,
    private cryptService: CryptService,
    private storageService: StorageService,
    private giveService: GiveService
  ) { }

  async ngOnInit() {
    this.stripe = Stripe(GiveConstants.STRIPE_PK);
    await this.retrieveAppToken();
    await this.retrievePreviousData();
    this.giveService.fetchPaymentMethods(this.mobiletoken).subscribe(res => {
      console.log('res', res);
      let data = res[0]['data']['billing_details'];

      let giveData = new GiveModel()
      giveData.setData(data.email, data.name.split(" ")[0], data.name.split(" ")[1], data.phone, '');
      this.updateAddedView(giveData);
    });
  }

  ngDoCheck() {
    const titheAmount = this.giveControls.tithe;
    this.grandTotal = this.calculateTotal(titheAmount, this.offeringArray);
  }

  retrieveMode() {
    return this.platform.is("ios") ? "ios": "md";
  }

  async addPaymentDetails() {
    //await this.navigationToDetail();
    let token = await this.storageService.getItem('apptoken');
    console.log('token!', token);
    await Browser.open({ url: 'http://192.168.43.202:4200/give/give-details?apptoken=' + token });
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

  submitTransaction() {
    this.formSubmitted = true;
    if (this.giveForm.valid && this.cardForm.valid) {
      this.giveControls.feeCover.setValue(this.isFeeCovered);
      let data = {
        cardDetails: this.cardForm.getRawValue(),
        giverDetails: this.giveForm.getRawValue()
      }

      data.giverDetails.tithe = this.convertTitheToService(data.giverDetails.tithe);
      data.giverDetails.offeringArray = this.convertOfferingToService(data.giverDetails.offeringArray);
      let encryptedData = this.giveService.encryptInformation(JSON.stringify(data));
      let body = {
        data: encryptedData
      }
      this.giveService.capturePaymentForStripe(body).subscribe(async res => {
        this.toastService.presetToast('Mobile giving successfully completed', 'success');
        this.cardForm.reset();
        this.giveForm.reset();
        this.formSubmitted = false;
        await this.retrievePreviousData();
      }, err => {

      });
      
    } else {
      if (!this.showActiveDetails) {
        this.toastService.presetToast('Please add payment information', 'danger');
      } else {
        this.toastService.presetToast('Please fill in all required fields', 'danger'); 
      }
    }
  }

  cancelFromCard() {
    this.activeFormIndex = 0;
    console.log('log', this.giveForm);
  }

  async navigationToDetail(obj = null) {
    const modal = await this.modalCtrl.create({
      component: PaymentDetailsComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        giveForm: this.giveForm,
        cardForm: this.cardForm,
        detailsAdded: this.showActiveDetails
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log('data', data);
    this.handleModalDismiss(data);
  }

  renderDot(text: string) {
    return text.split('');
  }

  private async retrievePreviousData() {
    let eItem = await this.storageService.getItem(this.saveKey);
    console.log('eitem', eItem);
    this.cryptService.decryptData(eItem).then(item => {
      if (item) {
        let data = JSON.parse(item);
        this.updateAddedView(data);
      }
    });
  }

  private async retrieveAppToken() {
    this.mobiletoken = await this.storageService.getItem('apptoken');
  }

  private updateAddedView(data: GiveModel) {
    this.giveControls.email.setValue(data.email);
    this.giveControls.firstName.setValue(data.firstName);
    this.giveControls.lastName.setValue(data.lastName);
    this.giveControls.phone.setValue(data.phone);

    this.showActiveDetails = true;
  }

  clearPaymentControls() {
    this.giveControls.email.reset();
    this.giveControls.firstName.reset();
    this.giveControls.lastName.reset();
    this.giveControls.phone.reset();

    this.cardControls.card.reset();
    this.cardControls.expiration.reset();
    this.cardControls.cvv.reset();
  }

  private encryptData(data) {
    if (data) {
      this.cryptService.encryptData(JSON.stringify(data)).then(async val => {
        let result = await this.storageService.setItem(this.saveKey, val);
        console.log('result', result);
      }).catch(err => {
        console.log('err', err);
      });
    }
  }

  private async handleModalDismiss(data) {
    switch (data['action']) {
      case 'submit':
        this.updateAddedView(data);
        this.encryptData(data);
      break;
      case 'delete':
        this.clearPaymentControls();
        this.showActiveDetails = false;
        let eItem = await this.storageService.removeItem(this.saveKey);
      break;
    }
  }

  private convertTitheToService(tithe: string) {
    let item = tithe.split("$").join("").split(",").join("");
    return +item;
  }

  
  private convertOfferingToService(offering: Array<any>) {
    offering.forEach(val => {
      let item = val['offering'].split("$").join("").split(",").join("");
      val['offering'] = +item;
    });

    return offering;
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
