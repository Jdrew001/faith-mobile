import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiblestudyPage } from './biblestudy.page';

const routes: Routes = [
  {
    path: '',
    component: BiblestudyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiblestudyPageRoutingModule {}
