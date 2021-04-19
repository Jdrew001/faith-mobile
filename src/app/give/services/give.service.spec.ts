import { TestBed } from '@angular/core/testing';

import { GiveService } from './give.service';

describe('GiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiveService = TestBed.get(GiveService);
    expect(service).toBeTruthy();
  });
});
