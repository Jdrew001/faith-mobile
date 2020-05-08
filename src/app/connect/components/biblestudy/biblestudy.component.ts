import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BiblestudyService } from '../../services/biblestudy.service';
import { HelperService } from 'src/app/core/helper.service';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.component.html',
  styleUrls: ['./biblestudy.component.scss'],
})
export class BiblestudyComponent implements OnInit {

  @Input('data') data: any[];
  placeHolderImg = '';

  constructor(private bibleStudyService: BiblestudyService,
    private helperService: HelperService,
    private documentViewer: DocumentViewer) { }

  ngOnInit() {
    this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true)
  }

  getImage(imgUrl) {
    return this.bibleStudyService.getImage(imgUrl);
  }

  viewFile(item) {
    const url = item.file.url;
    const fileName = item.file.name;
    const options: DocumentViewerOptions = {
      title: fileName
    }
    this.documentViewer.viewDocument(url, 'pdf', options);
  }
}
