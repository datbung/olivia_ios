import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcombodetailPage } from './foodcombodetail.page';

describe('FoodcombodetailPage', () => {
  let component: FoodcombodetailPage;
  let fixture: ComponentFixture<FoodcombodetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcombodetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcombodetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
