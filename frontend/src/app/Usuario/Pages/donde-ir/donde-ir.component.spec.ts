import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeIrComponent } from './donde-ir.component';

describe('DondeIrComponent', () => {
  let component: DondeIrComponent;
  let fixture: ComponentFixture<DondeIrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondeIrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeIrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
