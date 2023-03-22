import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesDosComponent } from './restaurantes-dos.component';

describe('RestaurantesDosComponent', () => {
  let component: RestaurantesDosComponent;
  let fixture: ComponentFixture<RestaurantesDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantesDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
