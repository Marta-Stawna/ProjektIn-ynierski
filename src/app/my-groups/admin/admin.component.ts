import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../common/groups.service';
import { LoginService } from '../../common/login.service';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private groupsService: GroupsService, private userService: LoginService, private popup: Popup) {
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

  private groupData = []
  private id;
  public text;
  private first_name;
  private last_name;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.getGroupsInfo();
    });

  }

  clickButton(){
    this.popup.show();
  }

  saveNote(data) {
    this.groupsService.addNote(this.id, data.textarea).subscribe(success => this.text = true,
    error => this.text = error);
  }

  getGroupsInfo() {
    this.groupsService.getGroupsInfo(this.id).subscribe((data) => this.groupData = data[0].users)
  }

  removeUser(id, first_name, last_name) {
    this.groupsService.removeUser(this.id, this.first_name, this.last_name, id, first_name, last_name).
      subscribe(succes => this.getGroupsInfo())
  }

}
