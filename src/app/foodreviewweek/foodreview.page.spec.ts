import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodreviewweekPage } from './foodreviewweek.page';

describe('FoodreviewweekPage', () => {
  let component: FoodreviewweekPage;
  let fixture: ComponentFixture<FoodreviewweekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodreviewweekPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodreviewweekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
