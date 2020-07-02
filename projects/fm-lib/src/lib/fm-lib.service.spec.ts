import { TestBed } from '@angular/core/testing';

import { FMLibService } from './fm-lib.service';

describe('FMLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FMLibService = TestBed.get(FMLibService);
    expect(service).toBeTruthy();
  });
});
