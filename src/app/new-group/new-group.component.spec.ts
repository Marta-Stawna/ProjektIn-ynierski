/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PopupModule } from 'ng2-opd-popup';
import { LoginService } from '../common/login.service';
import { GroupsService } from '../common/groups.service';
import { FormsModule } from '@angular/forms';

import { NewGroupComponent } from './new-group.component';

describe('NewGroupComponent', () => {
  let component: NewGroupComponent;
  let fixture: ComponentFixture<NewGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupComponent ],
      imports: [FormsModule, HttpModule, PopupModule.forRoot()],
      providers: [ LoginService, GroupsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
