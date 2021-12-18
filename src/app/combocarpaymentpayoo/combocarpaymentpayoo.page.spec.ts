import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombocarpaymentpayooPage } from './combocarpaymentpayoo.page';

describe('CombocarpaymentpayooPage', () => {
  let component: CombocarpaymentpayooPage;
  let fixture: ComponentFixture<CombocarpaymentpayooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombocarpaymentpayooPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombocarpaymentpayooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
