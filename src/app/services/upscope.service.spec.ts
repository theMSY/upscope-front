import { TestBed } from '@angular/core/testing';

import { UpscopeService } from './upscope.service';

describe('UpscopeService', () => {
  let service: UpscopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpscopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
