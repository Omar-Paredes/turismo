import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismobienestarPageComponent } from './turismobienestar-page.component';

describe('TurismobienestarPageComponent', () => {
  let component: TurismobienestarPageComponent;
  let fixture: ComponentFixture<TurismobienestarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismobienestarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismobienestarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
