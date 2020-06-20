import { TestBed } from '@angular/core/testing';

import { PrayerRequestFormService } from './prayer-request.form.service';

describe('PrayerRequest.FormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrayerRequestFormService = TestBed.get(PrayerRequestFormService);
    expect(service).toBeTruthy();
  });
});
