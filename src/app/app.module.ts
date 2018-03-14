import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { TagService } from '@app/service/tag/tag.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { StartPageComponent } from '@app/components/start-page/start-page.component';
import { BookmarkPageComponent } from '@app/components/bookmark-page/bookmark-page.component';
import { BookmarkItemComponent } from '@app/components/common/bookmark-item/bookmark-item.component';
import { BookmarkListComponent } from '@app/components/common/bookmark-list/bookmark-list.component';
import { AddBookmarkPageComponent } from './components/add-bookmark-page/add-bookmark-page.component';
import { TagListComponent } from './components/common/tag-list/tag-list.component';
import { BookmarkFormComponent } from './components/common/bookmark-form/bookmark-form.component';
import { TagFormComponent } from './components/common/tag-form/tag-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    BookmarkPageComponent,
    BookmarkItemComponent,
    BookmarkListComponent,
    AddBookmarkPageComponent,
    TagListComponent,
    BookmarkFormComponent,
    TagFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookmarkService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
