import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {

  @Input('video') video: string;
  @Input('poster') poster: string;

  constructor() { }

  ngOnInit() {}

  onChange(event) {
    event.preventDefault();
  }

}
