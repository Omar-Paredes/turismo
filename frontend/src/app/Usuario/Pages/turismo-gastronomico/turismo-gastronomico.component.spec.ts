import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoGastronomicoComponent } from './turismo-gastronomico.component';

describe('TurismoGastronomicoComponent', () => {
  let component: TurismoGastronomicoComponent;
  let fixture: ComponentFixture<TurismoGastronomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoGastronomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoGastronomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
