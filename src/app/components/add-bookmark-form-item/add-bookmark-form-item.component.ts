import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Router } from '@angular/router';
import { Bookmark } from '@app/model/bookmark';
import { Tag } from '@app/model/tag';
import { TagService } from '@app/service/tag/tag.service';

@Component({
  selector: 'app-add-bookmark-form-item',
  templateUrl: './add-bookmark-form-item.component.html',
  styleUrls: ['./add-bookmark-form-item.component.scss'],
})
export class AddBookmarkFormItemComponent implements OnInit {
  public bookmarkForm: FormGroup;
  public taglist: Tag[];
  public addedTags: Tag[];

  constructor(private fb: FormBuilder, private router: Router, private bookmarkService: BookmarkService, private tagService: TagService) {
  }

  ngOnInit() {
    this.formBuild();
    this.getTaglist();

    this.addedTags = [];
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
      overview: ['', [Validators.required, Validators.maxLength(500)]],
      tag: ['', []]
    });
  }

  getTaglist(): void {
    this.tagService.findTags()
      .subscribe(tags => this.taglist = tags);
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
