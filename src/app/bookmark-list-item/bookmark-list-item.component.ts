import { Component, OnInit } from '@angular/core';

import { Bookmark } from '../mock/bookmark';
import { BookmarkService } from '../service/bookmark.service';

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
