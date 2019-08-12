import { TestBed } from '@angular/core/testing';

import { HowdyService } from './howdy.service';

describe('HowdyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HowdyService = TestBed.get(HowdyService);
    expect(service).toBeTruthy();
  });
});
