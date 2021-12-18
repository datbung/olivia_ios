import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbillPage } from './foodbill.page';

describe('FoodbillPage', () => {
  let component: FoodbillPage;
  let fixture: ComponentFixture<FoodbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodbillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
