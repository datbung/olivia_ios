import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpaymentdonepayooPage } from './foodpaymentdonepayoo.page';

describe('FoodpaymentdonepayooPage', () => {
  let component: FoodpaymentdonepayooPage;
  let fixture: ComponentFixture<FoodpaymentdonepayooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpaymentdonepayooPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodpaymentdonepayooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
