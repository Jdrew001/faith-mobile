import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../core/helper.service';
import { AppConstants } from '../app-constants';
import { Preacher, Tags } from '../connect/components/sermons/sermons.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  filterTypes$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient, private helperService: HelperService) { }

  getImage(imgUrl) {
    return environment.IMG_URL + imgUrl;
  }

  // GET FILTERS FOR AUDIO 
  fetchPreachers() {
    const url = this.helperService.getResourceUrl(AppConstants.PREACHERS, false);
    return this.http.get<Array<Preacher>>(url);
  }

  fetchTags() {
    const url = this.helperService.getResourceUrl(AppConstants.TAGS, false);
    return this.http.get<Array<Tags>>(url);
  }
}
