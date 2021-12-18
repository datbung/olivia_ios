import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefoodPage } from './homefood.page';

describe('HomefoodPage', () => {
  let component: HomefoodPage;
  let fixture: ComponentFixture<HomefoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomefoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
