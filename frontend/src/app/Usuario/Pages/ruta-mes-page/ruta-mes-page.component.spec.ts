import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMesPageComponent } from './ruta-mes-page.component';

describe('RutaMesPageComponent', () => {
  let component: RutaMesPageComponent;
  let fixture: ComponentFixture<RutaMesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaMesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
