import { TestBed } from '@angular/core/testing';

import { ForgotPAsswordService } from './forgot-password.service';

describe('ForgotPAsswordService', () => {
  let service: ForgotPAsswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPAsswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
