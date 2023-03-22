import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoculturalPageComponent } from './turismocultural-page.component';

describe('TurismoculturalPageComponent', () => {
  let component: TurismoculturalPageComponent;
  let fixture: ComponentFixture<TurismoculturalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoculturalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoculturalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
