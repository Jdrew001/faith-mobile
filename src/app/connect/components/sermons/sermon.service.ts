import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectConstant } from '../../connect.constant';
import { HelperService } from 'src/app/core/helper.service';
import { Sermon } from './sermons.model';
import { map } from 'rxjs/operators';

@Injectable()
export class SermonService {

  constructor(private http: HttpClient, private helperService: HelperService) { }

  fetchSermons() {
    const url = this.helperService.getResourceUrl(ConnectConstant.SERMON_URL, false);
    return this.http.get<Sermon[]>(url).pipe(map(res => res));
  }
}
