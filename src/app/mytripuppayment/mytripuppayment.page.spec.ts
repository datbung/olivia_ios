import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytripuppaymentPage } from './mytripuppayment.page';

describe('MytripuppaymentPage', () => {
  let component: MytripuppaymentPage;
  let fixture: ComponentFixture<MytripuppaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytripuppaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytripuppaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
