import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookmarkFormItemComponent } from './add-bookmark-form-item.component';

describe('AddBookmarkFormItemComponent', () => {
  let component: AddBookmarkFormItemComponent;
  let fixture: ComponentFixture<AddBookmarkFormItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookmarkFormItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookmarkFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
