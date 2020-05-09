import { Injectable } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';
import { ConnectConstant } from '../connect.constant';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class BiblestudyService {

  allBibleStudies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private pdfFileType = 'application/pdf';

  constructor(private helperService: HelperService,
    private http: HttpClient,
    private fileOpener: FileOpener,
    private file: File,
    private fileTransfer: FileTransfer) { }

  fetchAllStudies() {
    const url = this.helperService.getResourceUrl(ConnectConstant.BIBLE_STUDY_URL, false);
    return this.http.get<any[]>(url);
  }

  getImage(imgUrl) {
    return environment.IMG_URL + imgUrl;
  }

  downloadAndOpenPdf(url, name) {
    let downloadUrl = url;
    let path = this.file.dataDirectory;
    const transfer = this.fileTransfer.create();

    transfer.download(downloadUrl, `${path}${name}.pdf`).then(entry => {
      let url = entry.toURL();
      this.fileOpener.open(url, this.pdfFileType);
    });
  }
}
