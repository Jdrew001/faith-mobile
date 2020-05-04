import { TestBed } from '@angular/core/testing';

import { LoadWorkerService } from './load-worker.service';

describe('LoadWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadWorkerService = TestBed.get(LoadWorkerService);
    expect(service).toBeTruthy();
  });
});
