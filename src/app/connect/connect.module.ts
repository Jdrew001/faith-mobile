import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectPageRoutingModule } from './connect-routing.module';

import { ConnectPage } from './connect.page';
import { SharedModule } from '../shared/shared.module';
import { SocialComponent } from './components/social/social.component';
import { BiblestudyComponent } from './components/biblestudy/biblestudy.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialService } from './services/social.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectPageRoutingModule,
    SharedModule
  ],
  providers: [
    SocialService
  ],
  declarations: [ConnectPage, SocialComponent, BiblestudyComponent, ContactComponent]
})
export class ConnectPageModule {}
