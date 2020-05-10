import { TestBed } from '@angular/core/testing';

import { ThemedBrowserService } from './themed-browser.service';

describe('ThemedBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemedBrowserService = TestBed.get(ThemedBrowserService);
    expect(service).toBeTruthy();
  });
});
