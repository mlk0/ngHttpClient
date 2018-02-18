import { TestBed, inject } from '@angular/core/testing';

import { JsonPlaceHoldService } from './json-place-hold.service';

describe('JsonPlaceHoldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPlaceHoldService]
    });
  });

  it('should be created', inject([JsonPlaceHoldService], (service: JsonPlaceHoldService) => {
    expect(service).toBeTruthy();
  }));
});
