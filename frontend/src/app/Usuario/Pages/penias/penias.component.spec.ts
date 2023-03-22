import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeniasComponent } from './penias.component';

describe('PeniasComponent', () => {
  let component: PeniasComponent;
  let fixture: ComponentFixture<PeniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
