import { TestBed } from '@angular/core/testing';

import { LoadValuesService } from './load-values.service';

describe('LoadValuesService', () => {
  let service: LoadValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
