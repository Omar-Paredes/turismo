import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarTuristicoComponent } from './lugar-turistico.component';

describe('LugarTuristicoComponent', () => {
  let component: LugarTuristicoComponent;
  let fixture: ComponentFixture<LugarTuristicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarTuristicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarTuristicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
