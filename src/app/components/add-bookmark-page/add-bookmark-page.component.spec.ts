import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookmarkPageComponent } from './add-bookmark-page.component';

describe('AddBookmarkPageComponent', () => {
  let component: AddBookmarkPageComponent;
  let fixture: ComponentFixture<AddBookmarkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookmarkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookmarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
