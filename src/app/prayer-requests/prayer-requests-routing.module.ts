import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerRequestsPage } from './prayer-requests.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerRequestsPageRoutingModule {}
