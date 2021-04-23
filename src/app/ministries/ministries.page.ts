import { Component, OnInit } from '@angular/core';
import { HelperService } from '../core/helper.service';
import { MinistryContent, Image } from './ministries.model';
import { MinistriesService } from './ministries.service';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {

  ministryContent = new MinistryContent();

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private helperService: HelperService,
    private ministriesService: MinistriesService
  ) { }

  ngOnInit() {
    this.ministriesService.fetchMinistryContent().subscribe(res => {
      this.ministryContent.ministrySection = res['ministrySection'];
      this.ministryContent.ministrySection.forEach(data => data.remoteImage = true);
    }, err => {
      this.ministryContent.ministrySection.forEach(data => data.remoteImage = false);
    })
  }

  loadImage(obj: {id: number, title: string, description: string, background: Image, remoteImage: boolean}) {
    return obj.remoteImage ? this.helperService.getCMSResource(obj.background.url): this.helperService.getResourceUrl(obj.background.url, true);
  }

}
