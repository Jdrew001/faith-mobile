import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { ActivatedRoute } from '@angular/router';
import { Announcement } from '../announcement.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.page.html',
  styleUrls: ['./announcement-details.page.scss'],
})
export class AnnouncementDetailsPage implements OnInit, OnDestroy {

  details: Announcement;
  @Input() params;

  constructor(private activatedRoute: ActivatedRoute,
    private announcementService: AnnouncementService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    const id = this.params.split('/')[1];
    this.announcementService.fetchAnnouncement(id);
    this.announcementService.announcement$.subscribe(val => this.details = val);
  }

  getImage(imgUrl) {
    return this.announcementService.getImage(this.details['image']['url']);
  }

  dismissPage() {
    this.modalCtrl.dismiss();
    this.details = null;
  }

  ngOnDestroy() {
    this.announcementService.announcement$.next(null);
  }

}
