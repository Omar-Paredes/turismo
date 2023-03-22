import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoruralPageComponent } from './turismorural-page.component';

describe('TurismoruralPageComponent', () => {
  let component: TurismoruralPageComponent;
  let fixture: ComponentFixture<TurismoruralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoruralPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoruralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
