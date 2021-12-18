import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodadddetailPage } from './foodadddetail.page';

describe('FoodadddetailPage', () => {
  let component: FoodadddetailPage;
  let fixture: ComponentFixture<FoodadddetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodadddetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodadddetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
