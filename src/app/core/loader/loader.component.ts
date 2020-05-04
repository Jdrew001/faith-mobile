import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.shouldLoad$.subscribe(data => {
      this.loading = data;
    });
  }

}
