import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioMovilComponent } from './radio-movil.component';

describe('RadioMovilComponent', () => {
  let component: RadioMovilComponent;
  let fixture: ComponentFixture<RadioMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
