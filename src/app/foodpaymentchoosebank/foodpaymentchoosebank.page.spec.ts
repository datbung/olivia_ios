import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpaymentchoosebankPage } from './foodpaymentchoosebank.page';

describe('FoodpaymentchoosebankPage', () => {
  let component: FoodpaymentchoosebankPage;
  let fixture: ComponentFixture<FoodpaymentchoosebankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpaymentchoosebankPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodpaymentchoosebankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
