import { TestBed } from '@angular/core/testing';

import { EstacionalidadService } from './estacionalidad.service';

describe('EstacionalidadService', () => {
  let service: EstacionalidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstacionalidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
