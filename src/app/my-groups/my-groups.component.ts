import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../common/groups.service';
import { MD_DIALOG_DATA } from '@angular/material';
import { MdDialogRef } from '@angular/material';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  private groups = [];
  private first_name;
  private last_name;
  constructor(private groupsService: GroupsService, private userService: LoginService) { }

  ngOnInit() {
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.loadGroups();
    });
  }

  // onCloseConfirm() {
  //   this.thisDialogRef.close('Confirm');
  // }
  // onCloseCancel() {
  //   this.thisDialogRef.close('Cancel');
  // }

  // removeItem(name) {
  //   this.groupsService.removeGroup(name).subscribe(success => this.loadGroups())
  // }

  loadGroups() {
    this.groupsService.getUserGroups(this.first_name, this.last_name).subscribe(data => this.groups = data,
    error => console.log(error))
  }
}
