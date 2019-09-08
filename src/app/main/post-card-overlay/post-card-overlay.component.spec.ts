import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardOverlayComponent } from './post-card-overlay.component';

describe('PostCardOverlayComponent', () => {
  let component: PostCardOverlayComponent;
  let fixture: ComponentFixture<PostCardOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
