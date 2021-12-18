import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodfilterPage } from './foodfilter.page';

describe('FoodfilterPage', () => {
  let component: FoodfilterPage;
  let fixture: ComponentFixture<FoodfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodfilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
