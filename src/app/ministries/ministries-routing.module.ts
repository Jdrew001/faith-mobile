import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistriesPage } from './ministries.page';

const routes: Routes = [
  {
    path: '',
    component: MinistriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistriesPageRoutingModule {}
