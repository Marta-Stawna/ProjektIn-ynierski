import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../common/groups.service';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  public info;
  private first_name;
  private last_name;
  constructor(private groupsService: GroupsService, private userService: LoginService) { }

  ngOnInit() {
    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
    });
  }

  save(data) {
    this.groupsService.createGroup(data, this.first_name, this.last_name).subscribe(data => {
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
