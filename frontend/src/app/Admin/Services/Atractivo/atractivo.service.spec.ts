import { TestBed } from '@angular/core/testing';

import { AtractivoService } from './atractivo.service';

describe('AtractivoService', () => {
  let service: AtractivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtractivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
