import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementDetailsPage } from './announcement-details.page';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnouncementDetailsPageRoutingModule {}
