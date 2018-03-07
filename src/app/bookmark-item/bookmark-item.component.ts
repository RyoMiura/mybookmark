import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Bookmark } from '../mock/bookmark';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent implements OnInit {

  @Input() bookmark: Bookmark;

  constructor() { }

  ngOnInit() {
  }

}
