import { Component, OnInit } from '@angular/core';
import { Bookmark } from '@app/model/bookmark';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '@app/service/tag/tag.service';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {

  private bookmarks: Bookmark[];
  private searchText: string;
  private isSearch: boolean;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookmarkService: BookmarkService, private tagService: TagService) { }

  ngOnInit() {
    var this_ = this;
    this.activatedRoute.queryParams.subscribe(params => {
      var tagId = +params['tag'];
      this.getBookmarksByTag(tagId);
      this_.isSearch = tagId ? true : false;
    });

  }

  getBookmarksByTag(id: number): void {
    this.bookmarkService.findBookmarksByTag(id)
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  goSearch(): void {
    var this_ = this;
    this.tagService.findTags()
      .subscribe(tags => {
        var tag = tags.find(tag => tag.name === this_.searchText);
        var id = tag ? tag.id : -1;
        this_.router.navigate(['/bookmarks/search'], { queryParams: { 'tag': id } });
      });
  }
}
