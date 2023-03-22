import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeografiaPageComponent } from './geografia-page.component';

describe('GeografiaPageComponent', () => {
  let component: GeografiaPageComponent;
  let fixture: ComponentFixture<GeografiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeografiaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeografiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
