import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/shared.service';
import { CardModel, GiveModel } from '../../models/card.model';

declare var Stripe;

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {

  @Input() cardForm: FormGroup;
  @Input() giveForm: FormGroup;
  @Input() detailsAdded: boolean;

  @ViewChild('numberElement', null) numberElement: ElementRef;

  stripe;
  number;
  cardErrors;

  cardData$: EventEmitter<any> = new EventEmitter();

  cardData:CardModel = new CardModel();
  giveData: GiveModel = new GiveModel();
  formSubmitted = false;
  hasError = false;

  elementStyles = {
    base: {
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      borderBottom: '1px solid #DEDEDE',

      '::placeholder': {
        color: 'transparent',
      },
      ':-webkit-autofill': {
        color: 'black',
      },
    },
    invalid: {
      color: '#E25950',
      '::placeholder': {
        color: '#FFCCA5',
      },
    },
  };

  elementClasses = {
    focus: 'focused',
    empty: 'empty',
    invalid: 'invalid',
  };

  set cardControl(val) { this.cardData.card = val }
  set expControl(val) { this.cardData.expiration = val }
  set cvvControl(val) { this.cardData.cvv = val }

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

  get isValid() {
    return this.cardData.card.length == 19 && this.giveData.firstName !== '' 
      && this.giveData.lastName !== '' && this.validateEmail() && this.validatePhone() && this.cardData.expiration.length == 5 && this.cardData.cvv.length == 3
  }

  constructor(
    private modalCtrl: ModalController,
    private sharedService: SharedService
  ) { }

  ngOnInit() {

    this.stripe = Stripe('pk_test_51IWOf3A0DJoBf0VzbZR7l3xohneGilLnLoYtjesw2BED5SqjGsV8TZa2Xx9d68RCFlmAN87ErPgQhx9UMT1yrC1400omCjotV3');
    const elements = this.stripe.elements();
    this.number = elements.create('cardNumber', {
      style: this.elementStyles,
      classes: this.elementClasses
    });
    this.number.mount(this.numberElement.nativeElement);
    // if (this.detailsAdded) {
    //   this.cardData.setData(this.cardControls.card.value, this.cardControls.cvv.value, this.cardControls.expiration.value);
    //   this.giveData.setData(this.giveControls.email.value, this.giveControls.firstName.value, this.giveControls.lastName.value, this.giveControls.phone.value);
    //   setTimeout(() => {this.sharedService.cardData$.next(this.cardData);},100);
    // }
  }

  dismissPage() {
    this.modalCtrl.dismiss({
      action: 'cancel'
    });
  }

  saveChanges() {
    this.formSubmitted = true;
    if (this.isValid) {
      this.formSubmitted = false;
      this.modalCtrl.dismiss({
        'action': 'submit',
        'cardData': this.cardData,
        'giveData': this.giveData
      });
    }
  }

  deleteCard() {
    this.modalCtrl.dismiss({action: 'delete'});
  }

  validateEmail() {
    return this.giveData.email != '' && this.giveData.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g)
  }

  validatePhone() {
    return this.giveData.phone && this.giveData.phone.length == 14;
  }

  mask(event) {
    setTimeout(() => {
      var inputTxt = event.srcElement.value.toString();
      inputTxt = inputTxt ? inputTxt.split(" ").join("") : "";
      inputTxt = inputTxt.length > 16 ? inputTxt.substring(0, 16) : inputTxt;
      this.cardControl = this.maskString(inputTxt);

      this.sharedService.cardData$.next(this.cardData);
    }, 1);
  }

  maskExp(event) {
    setTimeout(() => {
      var inputTxt = event.srcElement.value.toString();
      inputTxt = inputTxt.replace(/[^\d\/]/g, "");

      inputTxt = inputTxt.replace(/(\d{2})(\d{2})/, "$1/$2")
      this.expControl = inputTxt;

      this.sharedService.cardData$.next(this.cardData);
    }, 1);
  }

  maskCvv(event) {
    setTimeout(() => {
      var inputTxt = event.srcElement.value.toString();
      inputTxt = inputTxt.replace(/[^\d\/]/g, "");

      inputTxt = inputTxt.replace(/(\d{4})/, "$1")
      this.cvvControl = inputTxt;

      this.sharedService.cardData$.next(this.cardData);
    }, 1);
  }
    
  maskString(inputTxt) {
    inputTxt = inputTxt.replace(/\D/g, "");
    inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1 $2");
    inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1 $2");
    inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1 $2");
    inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1 $2");
    return inputTxt;
  }

}
