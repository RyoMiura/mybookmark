import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@app/components/login/login.component';
import { StartPageComponent } from '@app/components/start-page/start-page.component';
import { BookmarkPageComponent } from '@app/components/bookmark-page/bookmark-page.component';
import { AddBookmarkPageComponent } from '@app/components/add-bookmark-page/add-bookmark-page.component';
import { EditBookmarkPageComponent } from '@app/components/edit-bookmark-page//edit-bookmark-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'index',
    component: StartPageComponent
  },
  {
    path: 'bookmarks/search',
    component: BookmarkPageComponent
  },
  {
    path: 'bookmarks/create',
    component: AddBookmarkPageComponent
  },
  {
    path: 'bookmarks/edit/:bookmarkId',
    component: EditBookmarkPageComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
