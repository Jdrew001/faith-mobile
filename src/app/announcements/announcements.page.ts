import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { AnnouncementService } from './announcement.service';
import { LoadWorkerService } from '../core/load-worker.service';
import { Announcement } from './announcement.model';
import { FormGroup, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { DateUtils } from '../core/utils/DateUtilities';
import { IonSegment, NavController, ModalController } from '@ionic/angular';
import { HelperService } from '../core/helper.service';
import { AnnouncementConst } from './announcement.constant';
import { AnnouncementDetailsPage } from './announcement-details/announcement-details.page';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})
export class AnnouncementsPage implements OnInit, OnDestroy {

  @ViewChild('btnSegment', null) btnSegment: IonSegment;
  dateUtils = new DateUtils();
  announcements: Announcement[] = [];
  listUpdate = false;
  limit = new Date().getFullYear() + 2;
  dates = [];
  activeDate: any = {};

  constructor(private announcementService: AnnouncementService,
    private loadWorkService: LoadWorkerService,
    private navController: NavController,
    private helperService: HelperService,
    private modalCtrl: ModalController) {
      this.announcementService.announcements$.subscribe(val => {
        this.announcements = val;
        this.listUpdate = false;
      });
    }

  ngOnInit() {
    this.dates = this.dateUtils.retrieveMonthAndYear();
    this.activeDate = this.dates.find(x => x.active);
    let date = this.dates[1].split(' ');
    this.activeDate = this.dates[1];
    this.loadAnnouncements(this.splitDate(this.dates[1]).month, this.splitDate(this.dates[1]).year);
  }

  loadAnnouncements(month, year) {
    this.announcementService.fetchFilteredAnnouncements(month, year)
  }

  updateList(event) {
    let date = event.detail.value.split(' ');
    let month = date[0];
    let year = date[1];
    this.listUpdate = true;
    this.announcementService.fetchFilteredAnnouncements(month, year);
  }

  splitDate(date) {
    let newDate = date.split(' ');
    let month = newDate[0];
    let year = newDate[1];

    return { month: month, year: year};
  }

  async navigationToDetail(id) {
    const modal = await this.modalCtrl.create({
      component: AnnouncementDetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'params': id 
      }
    });
    return await modal.present();
  }

  getEmptyImage() {
    return this.helperService.getResourceUrl(AnnouncementConst.EMPTY_ANNOUNCEMENT_IMAGE, true);
  }

  ngOnDestroy() {
    this.announcementService.announcement$.next(null);
  }
}
