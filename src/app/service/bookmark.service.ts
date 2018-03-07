import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Bookmark } from '../mock/bookmark';
import { BOOKMARKS } from '../mock/mock-bookmarks';

@Injectable()
export class BookmarkService {

  constructor() { }

  public findBookmarks(): Observable<Bookmark[]> {
    return of(BOOKMARKS);
  }

  public findBookmark(id: number): Observable<Bookmark> {
    return of(BOOKMARKS.find(bookmark => bookmark.id === id));
  }
}
