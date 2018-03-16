import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookmarkPageComponent } from './edit-bookmark-page.component';

describe('EditBookmarkPageComponent', () => {
  let component: EditBookmarkPageComponent;
  let fixture: ComponentFixture<EditBookmarkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookmarkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookmarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
