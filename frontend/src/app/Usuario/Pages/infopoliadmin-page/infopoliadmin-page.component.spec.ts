import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopoliadminPageComponent } from './infopoliadmin-page.component';

describe('InfopoliadminPageComponent', () => {
  let component: InfopoliadminPageComponent;
  let fixture: ComponentFixture<InfopoliadminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopoliadminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopoliadminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
