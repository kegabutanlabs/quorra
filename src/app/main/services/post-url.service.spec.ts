import { TestBed } from '@angular/core/testing';

import { PostUrlService } from './post-url.service';

describe('PostUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostUrlService = TestBed.get(PostUrlService);
    expect(service).toBeTruthy();
  });
});
