import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodreviewPage } from './foodreview.page';

describe('FoodreviewPage', () => {
  let component: FoodreviewPage;
  let fixture: ComponentFixture<FoodreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
