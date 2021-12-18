import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperateverifyotpPage } from './cooperateverifyotp.page';

describe('CooperateverifyotpPage', () => {
  let component: CooperateverifyotpPage;
  let fixture: ComponentFixture<CooperateverifyotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperateverifyotpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperateverifyotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
