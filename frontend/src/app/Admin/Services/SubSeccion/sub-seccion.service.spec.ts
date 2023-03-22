import { TestBed } from '@angular/core/testing';

import { SubSeccionService } from './sub-seccion.service';

describe('SubSeccionService', () => {
  let service: SubSeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
