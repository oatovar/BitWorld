import { TestBed } from '@angular/core/testing';

import { BitpostService } from './bitpost.service';

describe('BitpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitpostService = TestBed.get(BitpostService);
    expect(service).toBeTruthy();
  });
});
