import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GivePage } from './give.page';

const routes: Routes = [
  {
    path: '',
    component: GivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GivePageRoutingModule {}
