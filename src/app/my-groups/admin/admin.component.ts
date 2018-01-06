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

  private groupData = []
  private id;
  public text;
  private first_name;
  private last_name;
  private id_u;
  private first_name_u;
  private last_name_u;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.getGroupsInfo();
    });

  }

  clickButton(id, first_name, last_name){
    this.popup.show();
    this.id_u = id;
    this.first_name_u = first_name;
    this.last_name_u = last_name
  }

  saveNote(data) {
    this.groupsService.addNote(this.id, data.textarea).subscribe(success => this.text = true,
    error => this.text = error);
  }

  getGroupsInfo() {
    this.groupsService.getGroupsInfo(this.id).subscribe((data) => this.groupData = data[0].users)
  }

  removeUser() {
    this.groupsService.removeUser(this.id, this.first_name, this.last_name, this.id_u , this.first_name_u, this.last_name_u).
      subscribe(succes => this.getGroupsInfo())
  }

}
