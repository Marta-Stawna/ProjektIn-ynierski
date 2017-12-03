import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../common/groups.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  saved;
  constructor(private groupsService: GroupsService) { }

  ngOnInit() {}

  save(data) {
    this.groupsService.createGroup(data).subscribe(data => {
    this.saved = 1;
      },
    error => {
      this.saved = 0;
      console.log(error)
    });
  }

}
