import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcomboreviewPage } from './foodcomboreview.page';

describe('FoodcomboreviewPage', () => {
  let component: FoodcomboreviewPage;
  let fixture: ComponentFixture<FoodcomboreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcomboreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcomboreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
