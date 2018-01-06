/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PopupModule } from 'ng2-opd-popup';
import { LoginService } from '../common/login.service';
import { CommunicationService } from 'app/common/communication.service';

import { MyReservationGroupComponent } from './my-reservation-group.component';

describe('MyReservationGroupComponent', () => {
  let component: MyReservationGroupComponent;
  let fixture: ComponentFixture<MyReservationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReservationGroupComponent ],
      imports: [ HttpModule, PopupModule.forRoot()],
      providers: [ LoginService, CommunicationService ]
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
