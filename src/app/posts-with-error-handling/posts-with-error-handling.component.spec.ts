import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWithErrorHandlingComponent } from './posts-with-error-handling.component';

describe('PostsWithErrorHandlingComponent', () => {
  let component: PostsWithErrorHandlingComponent;
  let fixture: ComponentFixture<PostsWithErrorHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsWithErrorHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsWithErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
