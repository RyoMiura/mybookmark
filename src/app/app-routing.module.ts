import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { BookmarkPageComponent } from './bookmark-page/bookmark-page.component';

const routes: Routes = [
  {
    path: 'index',
    component: StartPageComponent
  },
  {
    path: 'bookmarks',
    component: BookmarkPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
