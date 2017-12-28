import { Component, OnInit, Inject, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MessagesService } from '../common/messages.service';
import { LoginService } from '../common/login.service';
import { GroupsService } from '../common/groups.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private groups = [];
  private first_name;
  private last_name;
  public info;
  private idGroup;
  public selectedGroup;
  private users;

  constructor(private messageService: MessagesService, private groupsService: GroupsService, private userService: LoginService, private popup:Popup) {
    this.popup.options = {
      header: "Moj header",
      color: "purple",
      widthProsentage: 50,
      showButtons: true,
      confirmBtnContent: "OK",
      cancleBtnContent: "Cancel",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
  }

  getUsers() {
    let id = this.selectedGroup.split(',')[0];

    this.groupsService.getGroupsInfo(id).subscribe(data => this.users = JSON.stringify(data[0].users))
  }

  clickButton(){
    this.popup.show();
  }

  ngOnInit() {
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.loadGroups();
      this.getAllMessages();
    });

  }

  getAllMessages() {
    this.messageService.allMessages(this.first_name, this.last_name).subscribe(data => console.log(data, "bbbb"))

  }

  loadGroups() {
    this.groupsService.getUserGroups(this.first_name, this.last_name).subscribe(data => this.groups = data,
    error => console.log(error))
  }

  getGroup(id) {
    this.groupsService.getGroupsInfo(id).subscribe(data => console.log(data,'ooo'))
  }

  saveData(data) {

    this.messageService.addMessage(data, this.users, this.first_name, this.last_name)
    .subscribe(reservation => {
          this.info = {
            status: true,
            data: ['Potwierdzenie: ','Wysłano wiadomość do grupy.']
          }
        },
        error => this.info = {
          status: false,
          data: ['Wystąpił błąd skontaktuj się z administratorem']
      });
  }
}
