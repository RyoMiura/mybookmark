import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Bookmark } from '@app/model/bookmark';
import { BOOKMARKS } from '@app/mock/mock-bookmarks';

@Injectable()
export class BookmarkService {

  constructor() { }

  public findBookmarks(): Observable<Bookmark[]> {
    return of(BOOKMARKS);
  }

  public findBookmark(id: number): Observable<Bookmark> {
    return of(BOOKMARKS.find(bookmark => bookmark.id === id));
  }

  public createBookmark(bookmark: Bookmark): Observable<boolean> {
    bookmark.id = BOOKMARKS.length;
    BOOKMARKS.push(bookmark);
    return of(true);
  }

  public removeBookmark(id: number): Observable<boolean> {
    var index = BOOKMARKS.findIndex(bookmark => bookmark.id === id);
    if (index !== -1) {
      BOOKMARKS.splice(index, 1);
      return of(true);
    } else {
      return of(false);
    }
    
  }
}
