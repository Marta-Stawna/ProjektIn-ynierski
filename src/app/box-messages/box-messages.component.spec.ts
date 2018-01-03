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

import { BoxMessagesComponent } from './box-messages.component';

fdescribe('BoxMessagesComponent', () => {
  let component: BoxMessagesComponent;
  let fixture: ComponentFixture<BoxMessagesComponent>;
  let element;
  let service;


  beforeEach(async(() => {
    let messages = [
        {
          "writer":[{ imie: 'Marta', nazwisko: 'Stawna'}],
          "_id.$id": '111',
          "date": '12-12-2017',
          "message": 'Test'
        }
      ]


    TestBed.configureTestingModule({
      declarations: [ BoxMessagesComponent ],
      imports: [ PopupModule.forRoot(), HttpModule ],
      providers: [{ provide: 'messages', useValue: messages}, { provide: MessagesService, useValue: { messages }}, LoginService, GroupsService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));


  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BoxMessagesComponent);
  //   //service = fixture.debugElement.injector.get(MessagesService);
  //   //spyOn(service, 'allMessages').and.returnValue(Observable.of<any[]>(messages));
  //   fixture = TestBed.createComponent(BoxMessagesComponent);
  //   component = fixture.componentInstance;
  //   element = fixture.nativeElement;
  //   fixture.detectChanges();
  // });
  //
  //
  // it('should create', fakeAsync(() => {
  //
  //   console.log(element, fixture.debugElement, fixture)
  //
  //   let btn = fixture.debugElement.query(By.css('button'));
  //     element.nativeElement.click();
  //     tick();
  //     fixture.detectChanges();
  //     expect(component.clickButtonPop1).toHaveBeenCalled();
  // })))
});
