/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginService } from '../../common/login.service';
import { GroupsService } from '../../common/groups.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopupModule } from 'ng2-opd-popup';
import { RouterTestingModule } from "@angular/router/testing";

import { AdminComponent } from './admin.component';

const appRoutes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'my-groups/admin/:id', component: AdminComponent}
];

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent  ],
      imports: [ FormsModule, HttpModule, PopupModule.forRoot(), RouterTestingModule.withRoutes(appRoutes) ],
      providers: [ LoginService, GroupsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
