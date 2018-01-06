/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PopupModule } from 'ng2-opd-popup';
import { LoginService } from 'app/common/login.service';
import { MessagesService } from 'app/common/messages.service';
import { GroupsService } from 'app/common/groups.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from "@angular/router/testing";

import { BoxMessagesComponent } from './box-messages.component';

describe('BoxMessagesComponent', () => {
  let component: BoxMessagesComponent;
  let fixture: ComponentFixture<BoxMessagesComponent>;

  const appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'messages', component: BoxMessagesComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMessagesComponent ],
      imports: [ PopupModule.forRoot(), HttpModule ],
      providers: [ MessagesService, LoginService, GroupsService ],
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
