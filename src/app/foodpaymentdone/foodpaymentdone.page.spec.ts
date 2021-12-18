import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpaymentdonePage } from './foodpaymentdone.page';

describe('FoodpaymentdonePage', () => {
  let component: FoodpaymentdonePage;
  let fixture: ComponentFixture<FoodpaymentdonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpaymentdonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodpaymentdonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
