import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { ActivatedRoute } from '@angular/router';
import { Announcement } from '../announcement.model';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.page.html',
  styleUrls: ['./announcement-details.page.scss'],
})
export class AnnouncementDetailsPage implements OnInit {

  details: Announcement;

  constructor(private activatedRoute: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcementService.fetchAnnouncement(this.activatedRoute.snapshot.paramMap.get('id'));
    this.announcementService.announcement$.subscribe(val => this.details = val);
  }

  getImage(imgUrl) {
    return this.announcementService.getImage(this.details['image']['url']);
  }

  dismissDetail(val) {
    this.details = null;
  }

}
