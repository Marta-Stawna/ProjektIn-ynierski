import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../common/groups.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  private groups = [];
  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.loadGroups();
  }

  removeItem(name) {
    this.groupsService.removeGroup(name).subscribe(success => this.loadGroups())
  }

  loadGroups() {
    this.groupsService.getGroups().subscribe(data => this.groups = data,
    error => console.log(error))
  }
}
