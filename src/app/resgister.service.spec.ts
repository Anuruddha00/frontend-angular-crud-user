import { TestBed } from '@angular/core/testing';

import { ResgisterService } from './shared/resgister.service';

describe('ResgisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResgisterService = TestBed.get(ResgisterService);
    expect(service).toBeTruthy();
  });
});
