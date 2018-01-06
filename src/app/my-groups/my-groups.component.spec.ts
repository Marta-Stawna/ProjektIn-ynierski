/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PopupModule } from 'ng2-opd-popup';
import { LoginService } from '../common/login.service';
import { GroupsService } from '../common/groups.service';
import { RouterTestingModule } from "@angular/router/testing";

import { MyGroupsComponent } from './my-groups.component';

const appRoutes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'my-groups', component: MyGroupsComponent}
];

describe('MyGroupsComponent', () => {
  let component: MyGroupsComponent;
  let fixture: ComponentFixture<MyGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGroupsComponent ],
      imports: [ HttpModule, PopupModule.forRoot(), RouterTestingModule.withRoutes(appRoutes)],
      providers: [ LoginService, GroupsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
