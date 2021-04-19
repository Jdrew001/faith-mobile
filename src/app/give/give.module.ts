import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GivePageRoutingModule } from './give-routing.module';

import { GivePage } from './give.page';
import { SharedModule } from '../shared/shared.module';
import { CurrencyMaskModule } from "ionicng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ionicng2-currency-mask/src/currency-mask.config";
import { ExpDateDirective } from './directives/exp-date.directive';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PhoneMaskDirective } from '../shared/directives/phone-mask.directive';
import { PaymentDetailsModule } from './components/payment-details/payment-details.module';
import { GiveService } from './services/give.service';


export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ".",
  precision: 2,
  prefix: "$ ",
  suffix: "",
  thousands: ","
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GivePageRoutingModule,
    SharedModule,
    CurrencyMaskModule,
    PaymentDetailsModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    GiveService
  ],
  declarations: [GivePage, ExpDateDirective]
})
export class GivePageModule {}
