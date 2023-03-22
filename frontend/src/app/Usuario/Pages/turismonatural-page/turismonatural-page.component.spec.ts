import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismonaturalPageComponent } from './turismonatural-page.component';

describe('TurismonaturalPageComponent', () => {
  let component: TurismonaturalPageComponent;
  let fixture: ComponentFixture<TurismonaturalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismonaturalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismonaturalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
