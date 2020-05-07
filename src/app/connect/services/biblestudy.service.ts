import { Injectable } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';
import { ConnectConstant } from '../connect.constant';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiblestudyService {

  allBibleStudies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private helperService: HelperService, private http: HttpClient) { }

  fetchAllStudies() {
    const url = this.helperService.getResourceUrl(ConnectConstant.BIBLE_STUDY_URL, false);
    return this.http.get<any[]>(url);
  }

  getImage(imgUrl) {
    return environment.IMG_URL + imgUrl;
  }
}
