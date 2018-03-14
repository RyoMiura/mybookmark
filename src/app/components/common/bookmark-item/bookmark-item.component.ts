import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Bookmark } from '@app/model/bookmark';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent implements OnInit {

  @Input() bookmark: Bookmark;

  constructor(private router: Router, private bookmarkService: BookmarkService) { }

  ngOnInit() {
  }

  removeBookmark(id: number): void {
    this.bookmarkService.removeBookmark(id)
      .subscribe(() => this.router.navigate(["/index"]));
  }
}
