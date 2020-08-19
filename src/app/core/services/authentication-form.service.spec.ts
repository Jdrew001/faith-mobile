import { TestBed } from '@angular/core/testing';

import { AuthenticationFormService } from './authentication-form.service';

describe('AuthenticationFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationFormService = TestBed.get(AuthenticationFormService);
    expect(service).toBeTruthy();
  });
});
