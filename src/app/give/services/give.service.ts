import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';
import { Crypt, RSA } from 'hybrid-crypto-js';
import { GiveConstants } from '../GiveConstants';

@Injectable({
  providedIn: 'root'
})
export class GiveService {

  crypt: Crypt = new Crypt();
  rsa = new RSA();

  constructor(
    private httpClient: HttpClient,
    private helperService: HelperService
  ) { }

  capturePaymentForStripe(data) {
    const url = this.helperService.getCMSResource('/captureGiving');
    return this.httpClient.post(url, data);
  }

  encryptInformation(data) {
    return this.crypt.encrypt(GiveConstants.PUBLIC_KEY, JSON.stringify(data));
  }
}
