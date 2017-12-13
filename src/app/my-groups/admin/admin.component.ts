import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../common/groups.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private groupsService: GroupsService) { }

  private groupData = [
    {
      name: 'aaaa',
      role: 'admin',
      room: 'Aula A',
    },
    {
      name: 'bbbb',
      role: 'uczestnik',
      room: 'Aula A',
    },

  ]
  private id;
  public text;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getGroupsInfo();

  }

  saveNote(data) {
    this.groupsService.addNote(this.id, data.textarea).subscribe(success => this.text = true,
    error => this.text = error);
  }

  getGroupsInfo() {
    this.groupsService.getGroupsInfo(this.id).subscribe((data) => console.log(data))
  }

}
