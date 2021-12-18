import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodinstallmentdonePage } from './foodinstallmentdone.page';

describe('FoodinstallmentdonePage', () => {
  let component: FoodinstallmentdonePage;
  let fixture: ComponentFixture<FoodinstallmentdonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodinstallmentdonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodinstallmentdonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
