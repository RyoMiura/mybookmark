import { Component, OnInit, Input } from '@angular/core';

import { Bookmark } from '@app/model/bookmark';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})

export class BookmarkListComponent implements OnInit {

  @Input() bookmarks: Bookmark[];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
  }
}
