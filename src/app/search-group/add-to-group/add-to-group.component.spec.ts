/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginService } from 'app/common/login.service';
import { GroupsService } from 'app/common/groups.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddToGroupComponent } from './add-to-group.component';

const appRoutes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'search-group/:id', component: AddToGroupComponent}
];

describe('AddToGroupComponent', () => {
  let component: AddToGroupComponent;
  let fixture: ComponentFixture<AddToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToGroupComponent ],
      imports: [  FormsModule, HttpModule, RouterTestingModule.withRoutes(appRoutes) ],
      providers: [ LoginService, GroupsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
