import { TestBed } from '@angular/core/testing';

import { OfferedServicesService } from './offered-services.service';

describe('OfferedServicesService', () => {
  let service: OfferedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
