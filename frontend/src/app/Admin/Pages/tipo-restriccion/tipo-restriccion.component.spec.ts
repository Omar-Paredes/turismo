import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRestriccionComponent } from './tipo-restriccion.component';

describe('TipoRestriccionComponent', () => {
  let component: TipoRestriccionComponent;
  let fixture: ComponentFixture<TipoRestriccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoRestriccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoRestriccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
