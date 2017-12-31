import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesService } from '../common/messages.service';
import { LoginService } from '../common/login.service';
import { GroupsService } from '../common/groups.service';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-box-messages',
  templateUrl: './box-messages.component.html',
  styleUrls: ['./box-messages.component.css']
})
export class BoxMessagesComponent implements OnInit {

  constructor(private messageService: MessagesService, private groupsService: GroupsService, private userService: LoginService, private popup: Popup) {
    this.popup.options = {
      header: "",
      color: "purple",
      widthProsentage: 40,
      showButtons: true,
      confirmBtnContent: "Tak",
      cancleBtnContent: "Wróć",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
  }

  private first_name;
  private last_name;
  messages;
  myMessages;
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;

  ngOnInit() {
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.getAllMessages();
      this.getAllMyMessages();
    });
  }

  getAllMessages() {
    this.messageService.allMessages(this.first_name, this.last_name).subscribe(data => this.messages = data)
  }

  getAllMyMessages() {
    this.messageService.allMessagesWriter(this.first_name, this.last_name).subscribe(data => this.myMessages = data)
  }

  removeMyMessage(id) {
    this.messageService.removeMyMessage(id).subscribe(data => this.getAllMyMessages())
  }

  removeMessage(id) {
    this.messageService.removeMessage(id, this.first_name, this.last_name).subscribe(data => {
      this.getAllMessages();
      this.getAllMyMessages();
    })
  }

  clickButtonPop1(){
    this.popup1.show();
  }

  clickButtonPop2(){
    this.popup2.show();
  }
}
