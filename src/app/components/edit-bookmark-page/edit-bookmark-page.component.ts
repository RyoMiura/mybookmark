import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Bookmark } from '@app/model/bookmark';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-bookmark-page',
  templateUrl: './edit-bookmark-page.component.html',
  styleUrls: ['./edit-bookmark-page.component.scss']
})
export class EditBookmarkPageComponent implements OnInit {

  public id: number;
  public bookmark: Bookmark;

  constructor(private router: Router, private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.id = 0;
    this.getBookmark(this.id);
  }

  getBookmark(id: number) {
    this.bookmarkService.findBookmark(id)
      .subscribe(bookmark => this.bookmark = bookmark);
  }

  updateBookmark(bookmark: Bookmark) {
    this.bookmarkService.updateBookmark(this.id, bookmark)
      .subscribe(() => this.router.navigate(["/index"]));
  }

}
