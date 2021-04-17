import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { PaymentDetailsComponent } from "./payment-details.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      SharedModule
    ],
    declarations: [PaymentDetailsComponent],
    entryComponents: [PaymentDetailsComponent]
  })
  export class PaymentDetailsModule {}