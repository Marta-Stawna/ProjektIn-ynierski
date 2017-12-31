/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GroupsService } from '../common/groups.service';
import { LoginService } from 'app/common/login.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchGroupComponent } from './search-group.component';

const appRoutes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'search', component: SearchGroupComponent}
];

describe('SearchGroupComponent', () => {
  let component: SearchGroupComponent;
  let fixture: ComponentFixture<SearchGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGroupComponent ],
      imports: [  FormsModule, HttpModule, RouterTestingModule.withRoutes(appRoutes) ],
      providers: [ GroupsService, LoginService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
