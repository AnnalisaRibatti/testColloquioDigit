import { TestBed } from '@angular/core/testing';

import { ApiPexelsService } from './api-pexels.service';

describe('ApiPexelsService', () => {
  let service: ApiPexelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPexelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
