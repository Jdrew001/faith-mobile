import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getImage(imgUrl) {
    return environment.IMG_URL + imgUrl;
  }
}
