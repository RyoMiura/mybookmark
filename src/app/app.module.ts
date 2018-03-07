import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookmarkService } from './service/bookmark.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookmarkPageComponent } from './bookmark-page/bookmark-page.component';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { BookmarkListItemComponent } from './bookmark-list-item/bookmark-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    BookmarkPageComponent,
    BookmarkItemComponent,
    BookmarkListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BookmarkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
