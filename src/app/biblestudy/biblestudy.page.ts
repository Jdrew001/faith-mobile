import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { BibleStudy } from './biblestudy.model';
import { BiblestudyService } from './biblestudy.service';

@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.page.html',
  styleUrls: ['./biblestudy.page.scss'],
})
export class BiblestudyPage implements OnInit {

  bibleStudies: Array<BibleStudy>;

  constructor(
    private bibleStudyService: BiblestudyService
  ) { }

  ngOnInit() {
    this.fetchBibleStudies();
  }

  fetchBibleStudies() {
    this.bibleStudyService.fetchBibleStudies().subscribe(res => {
      this.bibleStudies = res;
    });
  }

  getImage(imgUrl) {
    return this.bibleStudyService.getImage(imgUrl);
  }

  async viewFile(item) {
    const url = item.file.url;
    await Browser.open({ url: environment.CMS_URL + url });
  }

}
