import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../core/helper.service';
import { AnnouncementConst } from './announcement.constant';
import { Announcement } from './announcement.model';
import { BehaviorSubject } from 'rxjs';
import { LoadWorkerService } from '../core/load-worker.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements$: BehaviorSubject<Announcement[]> = new BehaviorSubject(null);
  announcement$: BehaviorSubject<Announcement> = new BehaviorSubject(null);

  constructor(
    private httpClient: HttpClient,
    private helperService: HelperService,
    private loadWorkerService: LoadWorkerService) { }

  fetchAnnouncements(event = null) {
    const url = this.helperService.getResourceUrl(AnnouncementConst.ANNOUNCEMENTS, false);
    return this.httpClient.get<any[]>(url).subscribe(val => {
      this.announcements$.next(val);
      this.loadWorkerService.announcementLoad$.next(false);
      this.cancelRefresh(event);
    }, err => this.handleError(err));
  }
  
  fetchFilteredAnnouncements(month, year) {
    const url = this.helperService.getResourceUrl(`${AnnouncementConst.ANNOUNCEMENTS}?_sort=date:ASC&month=${month}&year=${year}`, false);
    return this.httpClient.get<any[]>(url).subscribe(val => {
      this.announcements$.next(val);
      this.loadWorkerService.announcementLoad$.next(false);
    }, err => this.handleError(err));
  }

  fetchAnnouncement(id) {
    const url = this.helperService.getResourceUrl(`${AnnouncementConst.ANNOUNCEMENTS}/${id}`, false);
    return this.httpClient.get<any>(url).subscribe(val => {
      this.announcement$.next(val);
    }, err => this.handleError(err));
  }

  getImage(imgUrl) {
    return environment.BASE_URL + imgUrl;
  }

  private handleError(err) {
    this.announcements$.next([]);
    this.announcement$.next(null);
  }

  private cancelRefresh(event) {
    if (event && event.target) {
      event.target.complete();
    }
  }
}
