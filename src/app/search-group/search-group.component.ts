import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../common/groups.service';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.css']
})
export class SearchGroupComponent implements OnInit {

  private groupData = [];
  constructor(private groupsService: GroupsService) { }

  ngOnInit() {}

  save(data) {
    this.groupsService.searchGroup(data.name).subscribe(data => this.groupData = data,
    error => console.log(error))
  }
}
