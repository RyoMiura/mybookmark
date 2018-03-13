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
import { BookmarkItemComponent } from '@app/components/bookmark-item/bookmark-item.component';
import { BookmarkListItemComponent } from '@app/components/bookmark-list-item/bookmark-list-item.component';
import { AddBookmarkPageComponent } from './components/add-bookmark-page/add-bookmark-page.component';
import { AddBookmarkFormItemComponent } from './components/add-bookmark-form-item/add-bookmark-form-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    BookmarkPageComponent,
    BookmarkItemComponent,
    BookmarkListItemComponent,
    AddBookmarkPageComponent,
    AddBookmarkFormItemComponent,
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
