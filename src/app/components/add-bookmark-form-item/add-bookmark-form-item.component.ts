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
  public addedTags: Tag[];

  constructor(private fb: FormBuilder, private router: Router, private bookmarkService: BookmarkService, private tagService: TagService) {
  }

  ngOnInit() {
    this.formBuild();
    this.addedTags = [];
    // this.linksModelAndFormValue();
  }

  onSubmit(): void {
    var newBookmark: Bookmark = {
      id: null,
      title: this.bookmarkForm.get('title').value,
      url: this.bookmarkForm.get('url').value,
      overview: this.bookmarkForm.get('overview').value,
      tags: this.addedTags
    }
    this.bookmarkService.createBookmark(newBookmark)
      .subscribe(() => this.router.navigate(["/bookmarks"]));
  }

  formBuild(): void {
    this.bookmarkForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      url: ['', [Validators.required]],
      overview: ['', [Validators.required, Validators.maxLength(500)]],
      tag: ['', [Validators.required]]
    });
  }

  addTag(): void {
    var this_ = this;
    this.tagService.findTags()
      .subscribe(function (tags) {
        var targetTagName: string = this_.bookmarkForm.get('tag').value;
        var inputedTag = tags.find(tag => tag.name === targetTagName);
        if (inputedTag) {
          this_.addedTags.push(inputedTag);
        }
        // this_.addedTags.push(tags.find(tag => tag.name === targetTagName));
        this_.bookmarkForm.get('tag').reset();
      });
  }

}
