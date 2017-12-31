import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PopupModule } from 'ng2-opd-popup';
import { EditComponent } from './edit.component';
import { LoginService } from 'app/common/login.service';
import { CommunicationService } from 'app/common/communication.service';
import { HttpModule } from '@angular/http';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent],
      imports: [ PopupModule.forRoot(), HttpModule],
      providers: [ CommunicationService, LoginService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    // let div = element.querySelector('div');
    // //set up subscriber
    // element.changes.subscribe(x => {
    //   expect(x).toBe(1);
    // });
  });
});
