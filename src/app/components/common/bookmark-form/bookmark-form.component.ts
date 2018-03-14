import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Router } from '@angular/router';

import { Bookmark } from '@app/model/bookmark';
import { Tag } from '@app/model/tag';
import { TagService } from '@app/service/tag/tag.service';

import { TagFormComponent } from '@app/components/common/tag-form//tag-form.component';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {

  @ViewChild(TagFormComponent)
  public tagFormComponent: TagFormComponent;

  public bookmarkForm: FormGroup;
  public taglist: Tag[];
  public addedTags: Tag[];
  public openState: boolean;

  constructor(private fb: FormBuilder, private router: Router, private bookmarkService: BookmarkService, private tagService: TagService) {
  }

  ngOnInit() {
    this.formBuild();
    this.getTaglist();

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
        .subscribe(() => this.router.navigate(["/bookmarks"]));
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

  getTaglist(): void {
    this.tagService.findTags()
      .subscribe(tags => this.taglist = tags);
  }

  toggleAddTagForm(): void {
    this.openState = !this.openState;
  }

  onKeyEnter(event): void {
    this.addTag();
  }

  getAddedTags(): Tag[] {
    console.log(this.tagFormComponent);
    return this.tagFormComponent.tags;
  }

  addTag(): void {
    var targetTagName: string = this.bookmarkForm.get('tag').value;
    var inputedTag = this.taglist.find(tag => tag.name === targetTagName);
    var sameAddedTag = this.addedTags.find(tag => tag.name === targetTagName);
    if (inputedTag && !sameAddedTag) {
      this.addedTags.push(inputedTag);
    }
    this.bookmarkForm.get('tag').reset();
  }

  removeTag(index: number) {
    this.addedTags.splice(index, 1);
  }

}
