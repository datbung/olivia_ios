import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightcombopaymentpayooPage } from './flightcombopaymentpayoo.page';

describe('FlightcombopaymentpayooPage', () => {
  let component: FlightcombopaymentpayooPage;
  let fixture: ComponentFixture<FlightcombopaymentpayooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightcombopaymentpayooPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightcombopaymentpayooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
