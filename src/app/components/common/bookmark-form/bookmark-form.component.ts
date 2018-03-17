import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { Bookmark } from '@app/model/bookmark';
import { Tag } from '@app/model/tag';

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formBuild();
    if (this.initValue) {
      this.setInitialValue(this.initValue);
    }

    this.openState = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.initValue.isFirstChange());
    // console.log(this.initValue);
    // this.formBuild();
    // if (this.initValue) {
    //   this.setInitialValue(this.initValue);
    // }
  }

  onSubmit(): void {
    if (this.bookmarkForm.valid) {
      this.submit.emit(this.bookmarkForm.value);
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

  setInitialValue(initValue): void {
    this.bookmarkForm.get('title').setValue(initValue.title);
    this.bookmarkForm.get('url').setValue(initValue.url);
    this.bookmarkForm.get('overview').setValue(initValue.overview);
    this.bookmarkForm.get('tags').setValue(initValue.tags);
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
