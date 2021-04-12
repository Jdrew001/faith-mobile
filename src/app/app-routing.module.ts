import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'announcements', pathMatch: 'full' },
  {
    path: 'announcements',
    loadChildren: () => import('./announcements/announcements.module').then( m => m.AnnouncementsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'prayer-requests',
    loadChildren: () => import('./prayer-requests/prayer-requests.module').then( m => m.PrayerRequestsPageModule)
  },
  {
    path: 'ministries',
    loadChildren: () => import('./ministries/ministries.module').then( m => m.MinistriesPageModule)
  },
  {
    path: 'biblestudy',
    loadChildren: () => import('./biblestudy/biblestudy.module').then( m => m.BiblestudyPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'biblestudy',
    loadChildren: () => import('./biblestudy/biblestudy.module').then( m => m.BiblestudyPageModule)
  },
  {
    path: 'give',
    loadChildren: () => import('./give/give.module').then( m => m.GivePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
