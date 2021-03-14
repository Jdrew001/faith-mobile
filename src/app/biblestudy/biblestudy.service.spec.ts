import { TestBed } from '@angular/core/testing';

import { BiblestudyService } from './biblestudy.service';

describe('BiblestudyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiblestudyService = TestBed.get(BiblestudyService);
    expect(service).toBeTruthy();
  });
});
