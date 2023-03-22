import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionalidadComponent } from './estacionalidad.component';

describe('EstacionalidadComponent', () => {
  let component: EstacionalidadComponent;
  let fixture: ComponentFixture<EstacionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
