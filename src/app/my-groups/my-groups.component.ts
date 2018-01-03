import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../common/groups.service';
import { LoginService } from '../common/login.service';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  private groups = [];
  private first_name;
  private last_name;
  public id;
  constructor(private groupsService: GroupsService, private userService: LoginService, private popup: Popup) {
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

  clickButton(id){
    this.popup.show();
    this.id = id;
  }

  ngOnInit() {
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.loadGroups();
    });
  }

  loadGroups() {
    this.groupsService.getUserGroups(this.first_name, this.last_name).subscribe(data => this.groups = data,
    error => console.log(error))
  }

  removeUser() {
    this.groupsService.removeMe(this.id, this.first_name, this.last_name).subscribe(data => this.loadGroups(),
    error => console.log(error))
  }
}
