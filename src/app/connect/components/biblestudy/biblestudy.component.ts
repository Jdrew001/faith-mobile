import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BiblestudyService } from '../../services/biblestudy.service';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.component.html',
  styleUrls: ['./biblestudy.component.scss'],
})
export class BiblestudyComponent implements OnInit {

  @Input('data') data: any[];
  placeHolderImg = '';

  constructor(private bibleStudyService: BiblestudyService,
    private helperService: HelperService) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true)
  }

  getImage(imgUrl) {
    return this.bibleStudyService.getImage(imgUrl);
  }

  viewFile(item) {
    const url = item.file.url;
    const fileName = item.file.name;
    this.bibleStudyService.downloadAndOpenPdf(url, fileName);
  }
}
