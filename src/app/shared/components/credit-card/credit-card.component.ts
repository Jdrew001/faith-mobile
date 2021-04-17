import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from 'src/app/core/helper.service';
import { CreditCardService } from '../../services/credit-card.service';
import { SharedService } from '../../shared.service';
import { CardInfo, CardLogo } from './credit.model';

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
  cardArr: Array<string>;
  cardExp: any;
  cardCvv: string;
  cardImage: string;

  constructor(
    private helperService: HelperService,
    private creditCardService: CreditCardService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.checkCard("");
    this.sharedService.cardData$.subscribe(val => {
      this._cardInfo = val;
      this.cardArr = this._cardInfo.card.split(' ');
      this.cardExp = this._cardInfo.expiration;
      this.cardCvv = this._cardInfo.cvv;

      this.checkCard(this.cardArr.join(""))
    });
  }

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

  renderDot(text: string) {
    return text.split('');
  }

  private checkCard(val: string) {
    const cc = val.split(" ").join("");
    const newCc = this.creditCardService.getCardType(+cc);
    if (newCc) {
      this.cardImage = this.retrieveImage(`images/${CardLogo[newCc]}`)
    } else {
      this.cardImage = this.retrieveImage(`images/generic.png`);
    }
    
    console.log(this.creditCardService.getCardType(+cc));
  }

}
