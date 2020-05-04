import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  imgUrl = '../../../assets/faith_tab_logo_white.png';

  constructor() { }

  ngOnInit() {}

}
