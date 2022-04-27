import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomimagedetailPage } from './roomimagedetail.page';

describe('RoomimagedetailPage', () => {
  let component: RoomimagedetailPage;
  let fixture: ComponentFixture<RoomimagedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomimagedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomimagedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
