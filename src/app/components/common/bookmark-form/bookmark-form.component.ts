import { Component, OnInit, AfterViewInit, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
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
export class BookmarkFormComponent implements OnInit, OnChanges {

  @Input() initValue: Bookmark;
  @Output() submit = new EventEmitter<Bookmark>();

  public bookmarkForm: FormGroup;
  public openState: boolean;

  constructor(private fb: FormBuilder, private router: Router, private bookmarkService: BookmarkService, private tagService: TagService) {
  }

  ngOnInit() {
    this.formBuild();

    this.openState = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.initValue.isFirstChange());
    if (!changes.initValue.isFirstChange()) {
      this.setInitialValue();
      console.log(this.initValue);
    }
  }

  onSubmit(): void {
    if (this.bookmarkForm.valid) {
      this.submit.emit(this.bookmarkForm.value);
      // this.bookmarkService.createBookmark(this.bookmarkForm.value)
      //   .subscribe(() => this.router.navigate(["/index"]));
    }
  }

  formBuild(): void {
    this.bookmarkForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      url: ['', [Validators.required]],
      overview: ['', [Validators.maxLength(300)]],
      tags: [[], []]
    });
  }

  setInitialValue(): void {
    if (this.initValue) {
      this.bookmarkForm.get('title').setValue(this.initValue.title);
      this.bookmarkForm.get('url').setValue(this.initValue.url);
      this.bookmarkForm.get('overview').setValue(this.initValue.overview);
      this.bookmarkForm.get('tags').setValue(this.initValue.tags);
    }
  }

  toggleAddTagForm(): void {
    this.openState = !this.openState;
  }

  addTag(tag: Tag): void {
    var sameAddedTag = this.bookmarkForm.get('tags').value.find(added => added.name === tag.name);
    if (!sameAddedTag) {
      this.bookmarkForm.get('tags').value.push(tag);
    }
  }

  removeTag(index: number) {
    this.bookmarkForm.get('tags').value.splice(index, 1);
  }

}
