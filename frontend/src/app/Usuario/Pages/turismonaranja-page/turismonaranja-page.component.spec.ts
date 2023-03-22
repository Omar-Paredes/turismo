import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismonaranjaPageComponent } from './turismonaranja-page.component';

describe('TurismonaranjaPageComponent', () => {
  let component: TurismonaranjaPageComponent;
  let fixture: ComponentFixture<TurismonaranjaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismonaranjaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismonaranjaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
