import { TestBed, inject } from '@angular/core/testing';

import { ResultSharedService } from './result-shared.service';

describe('ResultSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultSharedService]
    });
  });

  it('should be created', inject([ResultSharedService], (service: ResultSharedService) => {
    expect(service).toBeTruthy();
  }));
});
