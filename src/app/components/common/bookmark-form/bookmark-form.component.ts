import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Router } from '@angular/router';

import { Bookmark } from '@app/model/bookmark';
import { Tag } from '@app/model/tag';
import { TagService } from '@app/service/tag/tag.service';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {

  public bookmarkForm: FormGroup;
  public addedTags: Tag[];
  public openState: boolean;

  constructor(private fb: FormBuilder, private router: Router, private bookmarkService: BookmarkService, private tagService: TagService) {
  }

  ngOnInit() {
    this.formBuild();

    this.addedTags = [];
    this.openState = false;
  }

  onSubmit(): void {
    console.log(this.bookmarkForm.valid);
    if (this.bookmarkForm.valid) {
      var newBookmark: Bookmark = {
        id: null,
        title: this.bookmarkForm.get('title').value,
        url: this.bookmarkForm.get('url').value,
        overview: this.bookmarkForm.get('overview').value,
        tags: this.addedTags,
        referedCount: 0
      }
      this.bookmarkService.createBookmark(newBookmark)
        .subscribe(() => this.router.navigate(["/index"]));
    }
  }

  formBuild(): void {
    this.bookmarkForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      url: ['', [Validators.required]],
      overview: ['', [Validators.maxLength(300)]],
      tag: ['', []]
    });
  }

  toggleAddTagForm(): void {
    this.openState = !this.openState;
  }

  addTag(tag: Tag): void {
    var sameAddedTag = this.addedTags.find(added => added.name === tag.name);
    if (!sameAddedTag) {
      this.addedTags.push(tag);
    }
  }

  removeTag(index: number) {
    this.addedTags.splice(index, 1);
  }

}
