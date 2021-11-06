import { TestBed } from '@angular/core/testing';

import { GuardLogGuard } from './guard-log.guard';

describe('GuardLogGuard', () => {
  let guard: GuardLogGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardLogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
