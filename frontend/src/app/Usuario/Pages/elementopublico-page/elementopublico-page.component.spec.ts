import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementopublicoPageComponent } from './elementopublico-page.component';

describe('ElementopublicoPageComponent', () => {
  let component: ElementopublicoPageComponent;
  let fixture: ComponentFixture<ElementopublicoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementopublicoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementopublicoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
