import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullResponsePostsComponent } from './full-response-posts.component';

describe('FullResponsePostsComponent', () => {
  let component: FullResponsePostsComponent;
  let fixture: ComponentFixture<FullResponsePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullResponsePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullResponsePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
