import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAtractivosComponent } from './seccion-atractivos.component';

describe('SeccionAtractivosComponent', () => {
  let component: SeccionAtractivosComponent;
  let fixture: ComponentFixture<SeccionAtractivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAtractivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAtractivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
