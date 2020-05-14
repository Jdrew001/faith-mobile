import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../helper.service';
import { CoreConstants } from '../CoreConstants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  appToken$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private helperService: HelperService) { }

  retrieveToken() {
    const url = this.helperService.getResourceUrl(`${CoreConstants.TOKEN_URL}`);
    return this.http.post<any>(url, CoreConstants.APP_USER);
  }
}
