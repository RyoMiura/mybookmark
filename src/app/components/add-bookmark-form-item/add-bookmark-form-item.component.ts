import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BookmarkService } from '@app/service/bookmark/bookmark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark-form-item',
  templateUrl: './add-bookmark-form-item.component.html',
  styleUrls: ['./add-bookmark-form-item.component.scss'],  
})
export class AddBookmarkFormItemComponent implements OnInit {
  public bookmarkForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private bookmarkService: BookmarkService) { 
  }

  ngOnInit() {
    this.formBuild();
  }

  onSubmit(): void {
    var newBookmark = this.bookmarkForm.value;
    newBookmark.id = null;
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

}
