import { TestBed, async, inject } from '@angular/core/testing';

import { CheckinGuard } from './checkin.guard';

describe('CheckinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckinGuard]
    });
  });

  it('should ...', inject([CheckinGuard], (guard: CheckinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
