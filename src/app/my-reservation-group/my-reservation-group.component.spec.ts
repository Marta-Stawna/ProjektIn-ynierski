/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyReservationGroupComponent } from './my-reservation-group.component';

describe('MyReservationGroupComponent', () => {
  let component: MyReservationGroupComponent;
  let fixture: ComponentFixture<MyReservationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReservationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReservationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
