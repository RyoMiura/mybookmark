import { Component, OnInit } from '@angular/core';

import { Bookmark } from '@app/mock/bookmark';
import { BookmarkService } from '@app/service/bookmark.service';

@Component({
  selector: 'app-bookmark-list-item',
  templateUrl: './bookmark-list-item.component.html',
  styleUrls: ['./bookmark-list-item.component.scss']
})

export class BookmarkListItemComponent implements OnInit {
  public bookmarks: Bookmark[];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.getBookmarks();
  }

  private getBookmarks(): void {
    this.bookmarkService.findBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

}
