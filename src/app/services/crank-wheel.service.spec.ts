import { TestBed } from '@angular/core/testing';

import { CrankWheelService } from './crank-wheel.service';

describe('CrankWheelService', () => {
  let service: CrankWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrankWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
