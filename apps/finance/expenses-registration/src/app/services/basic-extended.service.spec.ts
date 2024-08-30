import { TestBed } from '@angular/core/testing';

import { BasicExtendedService } from './basic-extended.service';

describe('BasicExtendedService', () => {
  let service: BasicExtendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicExtendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
