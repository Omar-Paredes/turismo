import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMesComponent } from './ruta-mes.component';

describe('RutaMesComponent', () => {
  let component: RutaMesComponent;
  let fixture: ComponentFixture<RutaMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
