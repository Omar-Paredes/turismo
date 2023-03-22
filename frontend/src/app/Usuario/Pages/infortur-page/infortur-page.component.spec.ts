import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforturPageComponent } from './infortur-page.component';

describe('InforturPageComponent', () => {
  let component: InforturPageComponent;
  let fixture: ComponentFixture<InforturPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforturPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforturPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
