import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloturismoPageComponent } from './cicloturismo-page.component';

describe('CicloturismoPageComponent', () => {
  let component: CicloturismoPageComponent;
  let fixture: ComponentFixture<CicloturismoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloturismoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloturismoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
