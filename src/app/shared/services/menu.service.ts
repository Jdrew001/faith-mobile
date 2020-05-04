import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from 'src/app/core/helper.service';
import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient, private helperService: HelperService) { }

  fetchMenuReference() {
    const url = this.helperService.getResourceUrl(AppConstants.MENU_URL, false);
    return this.httpClient.get<any[]>(url);
  }
}
