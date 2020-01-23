import { TestBed } from '@angular/core/testing';

import { ApiUnsplashService } from './api-unsplash.service';

describe('ApiUnsplashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUnsplashService = TestBed.get(ApiUnsplashService);
    expect(service).toBeTruthy();
  });
});
