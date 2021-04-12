import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IonInput } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  providers: [CurrencyPipe]
})
export class CurrencyInputComponent implements OnInit, AfterContentInit {

  private static BACKSPACE_KEY = 'Backspace';
  private static BACKSPACE_INPUT_TYPE = 'deleteContentBackward';

  @ViewChild('dummyFacade', {static: false}) private dummyFacade: IonInput;

  @Input() precision: number;
  @Input() amount: string;
  @Input() control: string = '';
  @Input() formGroup: FormGroup;
  @Output() amountEntered = new EventEmitter<number>();

  get numControl() { return this.formGroup.controls[this.control] as FormControl }

  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    if (this.amount && this.amount.trim() !== '') {
      this.amountEntered.emit(+this.amount);
    }
  }

  ngAfterContentInit() {
    this.numControl.setValue(this.formattedAmount);
  }

  handleKeyUp(event: KeyboardEvent) {
    const pattern = /[0-9.,]/;
    console.log(event);
    let inputChar = String.fromCharCode(+event.key);

    if (isNaN(+event.key)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  handleInput(event: CustomEvent) {
    if (event.detail.data && !isNaN(event.detail.data)) {
      this.addDigit(event.detail.data);
      this.numControl.setValue(this.formattedAmount);
    } else if (event.detail.inputType === CurrencyInputComponent.BACKSPACE_INPUT_TYPE) {
      this.delDigit();
      this.numControl.setValue(this.formattedAmount);
    }
  }

  private addDigit(key: string) {
    this.amount = this.amount + key;
    this.amountEntered.emit(+this.amount);
  }

  private delDigit() {
    this.amount = this.amount.substring(0, this.amount.length - 1);
    this.amountEntered.emit(+this.amount);
  }

  private clearInput() {
    this.dummyFacade.value = CONSTANTS.EMPTY; // ensures work for mobile devices
    // ensures work for browser
    this.dummyFacade.getInputElement().then((native: HTMLInputElement) => {
      native.value = CONSTANTS.EMPTY;
    });
  }

  get formattedAmount(): string {
    return this.currencyPipe.transform(+this.amount / Math.pow(10, this.precision));
  }

  openInput() {
    this.dummyFacade.setFocus();
  }

}

const CONSTANTS = {
  EMPTY: '',
};
