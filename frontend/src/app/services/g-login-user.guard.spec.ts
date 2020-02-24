import { TestBed, async, inject } from '@angular/core/testing';

import { GLoginUserGuard } from './g-login-user.guard';

describe('GLoginUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GLoginUserGuard]
    });
  });

  it('should ...', inject([GLoginUserGuard], (guard: GLoginUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
