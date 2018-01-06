/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommunicationService } from 'app/common/communication.service';
import { LoginService } from 'app/common/login.service';
import { GroupsService } from 'app/common/groups.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { ReservationGroupsComponent } from './reservation-groups.component';

describe('ReservationGroupsComponent', () => {
  let component: ReservationGroupsComponent;
  let fixture: ComponentFixture<ReservationGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationGroupsComponent ],
      imports: [ Ng2OrderModule, FormsModule, HttpModule ],
      providers: [ LoginService, CommunicationService, GroupsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
