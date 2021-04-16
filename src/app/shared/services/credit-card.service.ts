import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  getCardType (number) {
    const numberFormated = number.toString().replace(/\D/g, '')
    var patterns = {
      VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
      MASTER: /^5[1-5][0-9]{14}$/,
      DISCOVERY: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    }
    for (var key in patterns) {
      if (patterns[key].test(numberFormated)) {
        return key
      }
    }
  }
}
