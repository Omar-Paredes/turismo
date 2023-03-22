import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresnaturalesPageComponent } from './lugaresnaturales-page.component';

describe('LugaresnaturalesPageComponent', () => {
  let component: LugaresnaturalesPageComponent;
  let fixture: ComponentFixture<LugaresnaturalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresnaturalesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresnaturalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
