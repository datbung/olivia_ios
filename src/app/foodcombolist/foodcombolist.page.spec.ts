import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcombolistPage } from './foodcombolist.page';

describe('FoodcombolistPage', () => {
  let component: FoodcombolistPage;
  let fixture: ComponentFixture<FoodcombolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcombolistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcombolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
