import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { IonicModule } from '@ionic/angular';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { AutoScrollDirective } from './auto-scroll.directive';
import { NavDetailComponent } from './nav-detail/nav-detail.component';
import { ListCardItemComponent } from './components/list-card-item/list-card-item.component';
import { SharedService } from './shared.service';
import { DetailComponent } from './components/detail/detail.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { MenuService } from './services/menu.service';



@NgModule({
  declarations: [
    NavigationComponent,
    IconBarComponent,
    AutoScrollDirective,
    NavDetailComponent,
    ListCardItemComponent,
    DetailComponent,
    PhoneMaskDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavigationComponent,
    IconBarComponent,
    AutoScrollDirective,
    NavDetailComponent,
    ListCardItemComponent,
    DetailComponent,
    PhoneMaskDirective
  ],
  providers: [
    SharedService,
    MenuService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
