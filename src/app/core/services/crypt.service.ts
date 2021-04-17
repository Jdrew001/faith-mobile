import { Injectable } from '@angular/core';
import { AES256 } from '@ionic-native/aes-256/ngx';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  secureKey: string = '12345678910123456789012345678901'; // Any string, the length should be 32
  secureIV: string = '1234567891123456'; // Any string, the length should be 16

  constructor(
    private aes256: AES256
  ) { }

  encryptData(data): Promise<string> {
    return this.aes256.encrypt(this.secureKey, this.secureIV, data);
  }

  decryptData(data): Promise<string> {
    return this.aes256.decrypt(this.secureKey, this.secureIV, data);
  }
}
