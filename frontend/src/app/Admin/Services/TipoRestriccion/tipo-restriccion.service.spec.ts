import { TestBed } from '@angular/core/testing';

import { TipoRestriccionService } from './tipo-restriccion.service';

describe('TipoRestriccionService', () => {
  let service: TipoRestriccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoRestriccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
