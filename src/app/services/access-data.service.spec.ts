import { TestBed } from '@angular/core/testing';

import { AccessDataService } from './access-data.service';

describe('AcessDataService', () => {
  let service: AccessDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
