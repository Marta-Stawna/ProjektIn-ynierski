/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { OrderByPipe } from '../common/sort.pipe';
import { CommunicationService } from 'app/common/communication.service';
import { LoginService } from 'app/common/login.service';
import { HttpModule } from '@angular/http';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { TableRowComponent } from './table/tableRow/table-row/table-row.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, TableRowComponent ],
      imports : [ Ng2OrderModule, HttpModule ],
      providers: [ CommunicationService, LoginService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
