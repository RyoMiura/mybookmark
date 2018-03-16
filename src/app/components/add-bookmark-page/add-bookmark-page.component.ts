import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark-page',
  templateUrl: './add-bookmark-page.component.html',
  styleUrls: ['./add-bookmark-page.component.scss']
})
export class AddBookmarkPageComponent implements OnInit {

  constructor(private router: Router, private bookmarkService: BookmarkService) { }

  ngOnInit() {
  }

  createBookmark(bookmark): void {
      this.bookmarkService.createBookmark(bookmark)
        .subscribe(() => this.router.navigate(["/index"]));
  }

}
