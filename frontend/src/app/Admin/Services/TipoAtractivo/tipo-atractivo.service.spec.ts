import { TestBed } from '@angular/core/testing';

import { TipoAtractivoService } from './tipo-atractivo.service';

describe('TipoAtractivoService', () => {
  let service: TipoAtractivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAtractivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
