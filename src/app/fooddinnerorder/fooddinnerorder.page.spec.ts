import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDinnerOrderPage } from './fooddinnerorder.page';

describe('FoodorderPage', () => {
  let component: FoodDinnerOrderPage;
  let fixture: ComponentFixture<FoodDinnerOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDinnerOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDinnerOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
