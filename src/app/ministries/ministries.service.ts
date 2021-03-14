import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from '../core/helper.service';
import { MinistryContent } from './ministries.model';

@Injectable({
  providedIn: 'root'
})
export class MinistriesService {

  ministryContent = new MinistryContent();

  constructor(
    private http: HttpClient,
    private helperService: HelperService
  ) { }

  fetchMinistryContent() {
    const url = this.helperService.getCMSResource('/ministries-page');
    return this.http.get(url) as Observable<MinistryContent>;
  }
}
