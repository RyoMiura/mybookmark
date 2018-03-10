import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tag } from '@app/model/tag';
import { TAGS } from '@app/mock/mock-tags';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TagService {
  constructor() { }

  public findTags(): Observable<Tag[]> {
    return of(TAGS);
  }

}
