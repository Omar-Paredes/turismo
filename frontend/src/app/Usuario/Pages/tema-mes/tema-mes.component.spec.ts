import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaMesComponent } from './tema-mes.component';

describe('TemaMesComponent', () => {
  let component: TemaMesComponent;
  let fixture: ComponentFixture<TemaMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
