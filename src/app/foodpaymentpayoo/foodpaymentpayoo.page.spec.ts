import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpaymentpayooPage } from './foodpaymentpayoo.page';

describe('FoodpaymentpayooPage', () => {
  let component: FoodpaymentpayooPage;
  let fixture: ComponentFixture<FoodpaymentpayooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodpaymentpayooPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodpaymentpayooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
