import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAtractivoComponent } from './tipo-atractivo.component';

describe('TipoAtractivoComponent', () => {
  let component: TipoAtractivoComponent;
  let fixture: ComponentFixture<TipoAtractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoAtractivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAtractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
