import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodorderPage } from './foodorder.page';

describe('FoodorderPage', () => {
  let component: FoodorderPage;
  let fixture: ComponentFixture<FoodorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
