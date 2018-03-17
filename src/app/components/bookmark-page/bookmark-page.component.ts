import { Component, OnInit } from '@angular/core';
import { Bookmark } from '@app/model/bookmark';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {

  private bookmarks: Bookmark[];

  constructor(private activatedRoute: ActivatedRoute, private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      var tagId = +params['tag'];
      this.getBookmarksByTag(tagId);
    });
    
  }

  getBookmarksByTag(id: number): void {
    this.bookmarkService.findBookmarksByTag(id)
      .subscribe(bookmarks => this.bookmarks = bookmarks);
    
  }

}
