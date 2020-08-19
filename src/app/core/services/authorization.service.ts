import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../helper.service';
import { CoreConstants } from '../CoreConstants';
import { BehaviorSubject } from 'rxjs';
import { Registration, Login } from '../models/authorization.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  appToken$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  phoneToken$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private helperService: HelperService) {
    this.phoneToken$.subscribe(val => {
      // Initiate login check for user
      
    });
  }

  retrieveToken() {
    const url = this.helperService.getResourceUrl(`${CoreConstants.TOKEN_URL}`);
    return this.http.post<any>(url, CoreConstants.APP_USER);
  }

  login(userInfo: Login) {
    const url = this.helperService.getResourceUrl(`${CoreConstants.REGISTRATION_URL}`);
    return this.http.post<any>(url, userInfo);
  }

  register(userInfo: Registration) {
    const url = this.helperService.getResourceUrl(`${CoreConstants.TOKEN_URL}`);
    return this.http.post<any>(url, userInfo);
  }
}
