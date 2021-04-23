import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HelperService } from '../core/helper.service';
import { BibleStudy } from './biblestudy.model';

@Injectable({
  providedIn: 'root'
})
export class BiblestudyService {

  constructor(
    private helperService: HelperService,
    private http: HttpClient
  ) { }

  fetchBibleStudies(): Observable<Array<BibleStudy>> {
    const url = this.helperService.getCMSResource('/bible-studies');
    return this.http.get(url) as Observable<Array<BibleStudy>>;
  }

  getImage(imgUrl) {
    return environment.CMS_URL + imgUrl;
  }

  async downloadAndOpenPdf(url, name) {
    await Browser.open({ url: environment.CMS_URL + url });
  }
}
