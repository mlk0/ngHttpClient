import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastedPostsComponent } from './casted-posts.component';

describe('CastedPostsComponent', () => {
  let component: CastedPostsComponent;
  let fixture: ComponentFixture<CastedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
