import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtractivoMapperComponent } from './atractivo-mapper.component';

describe('AtractivoMapperComponent', () => {
  let component: AtractivoMapperComponent;
  let fixture: ComponentFixture<AtractivoMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtractivoMapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtractivoMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
