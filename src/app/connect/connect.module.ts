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
import { BiblestudyService } from './services/biblestudy.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AngularResizedEventModule } from 'angular-resize-event';
import { SermonService } from './components/sermons/sermon.service';
import { SermonsComponent } from './components/sermons/sermons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectPageRoutingModule,
    SharedModule,
    AngularResizedEventModule,
    LazyLoadImageModule
  ],
  providers: [
    SocialService,
    BiblestudyService,
    SermonService
  ],
  declarations: [ConnectPage, SocialComponent, BiblestudyComponent, ContactComponent, SermonsComponent]
})
export class ConnectPageModule {}
