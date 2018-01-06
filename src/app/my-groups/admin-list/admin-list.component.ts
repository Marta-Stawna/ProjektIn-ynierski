import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../common/groups.service';
import { LoginService } from '../../common/login.service';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  private groups = [];
  private first_name;
  private last_name;
  public name;
  constructor(private groupsService: GroupsService, private userService: LoginService, private popup: Popup) {
    this.popup.options = {
      header: "",
      color: "#034F84",
      widthProsentage: 40,
      showButtons: true,
      confirmBtnContent: "Tak",
      cancleBtnContent: "Wróć",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
   }

  clickButton(name){
    this.popup.show();
    this.name = name;
  }

  ngOnInit() {
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.loadGroups();
    });

  }

  removeItem() {
    this.groupsService.removeGroup(this.name, this.first_name,this.last_name).subscribe(success => this.loadGroups())
  }

  loadGroups() {
    this.groupsService.getCreatorGroups(this.first_name,this.last_name).subscribe(data => this.groups = data,
    error => console.log(error))
  }

}
