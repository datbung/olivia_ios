import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpaymentbankPage } from './foodpaymentbank.page';

describe('FoodpaymentbankPage', () => {
  let component: FoodpaymentbankPage;
  let fixture: ComponentFixture<FoodpaymentbankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpaymentbankPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodpaymentbankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
