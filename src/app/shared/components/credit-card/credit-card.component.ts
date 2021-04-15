import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';
import { CardInfo } from './credit.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class CreditCardComponent implements OnInit {

  _cardInfo: CardInfo;
  @Input() set cardInfo(val) {
    if (val) {
      this._cardInfo = val;
      this.cardArr = this._cardInfo.card.split(' ');
      this.cardExp = this._cardInfo.expiration;
      this.cardCvv = this._cardInfo.cvv;

      console.log(this.cardExp, this.cardCvv);
    }
  }
  cardArr: Array<string>;
  cardExp: any;
  cardCvv: string;

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
