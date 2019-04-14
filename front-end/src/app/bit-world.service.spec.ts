import { TestBed } from '@angular/core/testing';

import { BitWorldService } from './bit-world.service';

describe('BitWorldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitWorldService = TestBed.get(BitWorldService);
    expect(service).toBeTruthy();
  });
});
