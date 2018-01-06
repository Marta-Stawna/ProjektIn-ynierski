/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopupModule } from 'ng2-opd-popup';
import { LoginService } from '../../common/login.service';
import { GroupsService } from '../../common/groups.service';
import { RouterTestingModule } from "@angular/router/testing";

import { AdminListComponent } from './admin-list.component';

const appRoutes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'my-groups/admin', component: AdminListComponent}
];

describe('AdminListComponent', () => {
  let component: AdminListComponent;
  let fixture: ComponentFixture<AdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListComponent ],
      imports: [ HttpModule, PopupModule.forRoot(), RouterTestingModule.withRoutes(appRoutes)],
      providers: [ LoginService, GroupsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
