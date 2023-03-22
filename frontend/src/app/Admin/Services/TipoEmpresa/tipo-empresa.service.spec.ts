import { TestBed } from '@angular/core/testing';

import { TipoEmpresaService } from './tipo-empresa.service';

describe('TipoEmpresaService', () => {
  let service: TipoEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
