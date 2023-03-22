import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportePageComponent } from './transporte-page.component';

describe('TransportePageComponent', () => {
  let component: TransportePageComponent;
  let fixture: ComponentFixture<TransportePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
