import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from 'src/app/core/helper.service';
import { ConnectConstant } from '../connect.constant';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private httpClient: HttpClient, private helperService: HelperService) { }

  fetchFBFeed() {
    const url = ConnectConstant.FB_FEED;
    return this.httpClient.get<any[]>(url);
  }
}
