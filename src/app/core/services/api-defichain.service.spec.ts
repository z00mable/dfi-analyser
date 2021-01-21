import { TestBed } from '@angular/core/testing';

import { ApiDefichainService } from './api-defichain.service';

describe('ApiDefichainService', () => {
  let service: ApiDefichainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDefichainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
