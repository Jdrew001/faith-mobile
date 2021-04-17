import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/shared.service';
import { CardModel, GiveModel } from '../../models/card.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {

  @Input() cardForm: FormGroup;
  @Input() giveForm: FormGroup;

  cardData$: EventEmitter<any> = new EventEmitter();

  cardData:CardModel = new CardModel();
  giveData: GiveModel = new GiveModel();
  formSubmitted = false;
  hasError = false;

  set cardControl(val) { this.cardData.card = val }
  set expControl(val) { this.cardData.expiration = val }
  set cvvControl(val) { this.cardData.cvv = val }

  get isValid() {
    return 
  }

  constructor(
    private modalCtrl: ModalController,
    private sharedService: SharedService
  ) { }

  ngOnInit() {}

  dismissPage() {
    this.modalCtrl.dismiss();
  }

  saveChanges() {
    this.formSubmitted = true;
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
