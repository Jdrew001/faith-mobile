import { TestBed } from '@angular/core/testing';

import { PrayerRequest.FormService } from './prayer-request.form.service';

describe('PrayerRequest.FormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrayerRequest.FormService = TestBed.get(PrayerRequest.FormService);
    expect(service).toBeTruthy();
  });
});
