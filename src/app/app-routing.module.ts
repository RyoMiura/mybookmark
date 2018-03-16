import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPageComponent } from '@app/components/start-page/start-page.component';
import { BookmarkPageComponent } from '@app/components/bookmark-page/bookmark-page.component';
import { AddBookmarkPageComponent } from '@app/components/add-bookmark-page/add-bookmark-page.component';
import { EditBookmarkPageComponent } from '@app/components/edit-bookmark-page//edit-bookmark-page.component';

const routes: Routes = [
  {
    path: 'index',
    component: StartPageComponent
  },
  {
    path: 'bookmarks',
    component: BookmarkPageComponent
  },
  {
    path: 'add-bookmark',
    component: AddBookmarkPageComponent
  },
  {
    path: 'edit-bookmark',
    component: EditBookmarkPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
