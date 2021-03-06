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
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { VideoComponent } from './components/video/video.component';
import { FormsModule } from '@angular/forms';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { AudioPlayerService } from './services/audio-player.service';
import { PopoverComponent } from './components/popover/popover.component';
import { PushDetailsComponent } from './components/push-details/push-details.component';


@NgModule({
  declarations: [
    NavigationComponent,
    IconBarComponent,
    AutoScrollDirective,
    NavDetailComponent,
    ListCardItemComponent,
    DetailComponent,
    PhoneMaskDirective,
    VideoComponent,
    AudioPlayerComponent,
    PopoverComponent,
    PushDetailsComponent
  ],
  entryComponents: [
    PopoverComponent,
    PushDetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LazyLoadImageModule
  ],
  exports: [
    NavigationComponent,
    IconBarComponent,
    AutoScrollDirective,
    NavDetailComponent,
    ListCardItemComponent,
    DetailComponent,
    PhoneMaskDirective,
    VideoComponent,
    AudioPlayerComponent,
    PopoverComponent
  ],
  providers: [
    SharedService,
    MenuService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
