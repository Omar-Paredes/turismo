import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoTresSesentaComponent } from './destino-tres-sesenta.component';

describe('DestinoTresSesentaComponent', () => {
  let component: DestinoTresSesentaComponent;
  let fixture: ComponentFixture<DestinoTresSesentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinoTresSesentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoTresSesentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
