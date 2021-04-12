import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIntegerInput]'
})
export class IntegerInputDirectiveDirective {

  @Input() numValue;

  constructor() { }

  @HostListener('keydown.backspace', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace' && (this.numValue === '' || this.numValue == 0)) {
      event.preventDefault();
      return false;
    }
 
   }

  @HostListener('keypress', ['$event'])
  onInput(event: any) {
    const pattern = /[0-9]/; // without ., for integer only
    let inputChar = String.fromCharCode(event.which ? event.which : event.keyCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

    if (this.numValue >= 10000000) {
      event.preventDefault();
      return false;
    }
    
    return true;
  }

}
