import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(
    
  ) {}

  retrieveImage(url) {
    return this.helperService.getResourceUrl(url, true);
  }

  card = {
    state: 'ON',
    logo: "images/visa.png",
    chip: "images/chip.png",
    a: 1234,
    b: 5522,
    c: 8432,
    d: 2264,
    expires: '7/12'
  }

}
