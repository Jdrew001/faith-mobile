import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementsPage } from './announcements.page';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementsPage
  },
  {
    path: 'announcement-details/:id',
    loadChildren: () => import('./announcement-details/announcement-details.module').then( m => m.AnnouncementDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnouncementsPageRoutingModule {}
