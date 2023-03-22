import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSeccionComponent } from './sub-seccion.component';

describe('SubSeccionComponent', () => {
  let component: SubSeccionComponent;
  let fixture: ComponentFixture<SubSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
