import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../common/groups.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  public info;
  constructor(private groupsService: GroupsService) { }

  ngOnInit() {}

  save(data) {
    this.groupsService.createGroup(data).subscribe(data => {
      this.info = {
        status: true,
        data: ['Potwierdzenie: ','Jesteś założycielem grupy o nazwie ']
      }
    },
    error => this.info = {
      status: false,
      data: ['Nazwa grupy jest już zarezerwowana: ',
      'Proszę wybrać inną nazwę']
    });
  }

}
