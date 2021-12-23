import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSumaComponent } from './calc-suma.component';

describe('CalcSumaComponent', () => {
  let component: CalcSumaComponent;
  let fixture: ComponentFixture<CalcSumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcSumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
