import { TestBed } from '@angular/core/testing';

import { RetailerRegistrationService } from './retailer-registration.service';

describe('RetailerRegistrationService', () => {
  let service: RetailerRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
