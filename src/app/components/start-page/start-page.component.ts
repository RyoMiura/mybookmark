import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Bookmark } from '@app/model/bookmark';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  private bookmarks: Bookmark[];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.getBookmarks();
  }

  private getBookmarks(): void {
    this.bookmarkService.findBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }


}
