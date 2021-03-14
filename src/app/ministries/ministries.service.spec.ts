import { TestBed } from '@angular/core/testing';

import { MinistriesService } from './ministries.service';

describe('MinistriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinistriesService = TestBed.get(MinistriesService);
    expect(service).toBeTruthy();
  });
});
