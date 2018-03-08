import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-bookmark-form-item',
  templateUrl: './add-bookmark-form-item.component.html',
  styleUrls: ['./add-bookmark-form-item.component.scss'],  
})
export class AddBookmarkFormItemComponent implements OnInit {
  public bookmarkForm: FormGroup;

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.formBuild();
  }

  onSubmit(): void {
    console.log(this.bookmarkForm.value);
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
