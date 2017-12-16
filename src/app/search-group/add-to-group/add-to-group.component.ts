import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../common/groups.service';
import { LoginService } from '../../common/login.service';

@Component({
  selector: 'app-add-to-group',
  templateUrl: './add-to-group.component.html',
  styleUrls: ['./add-to-group.component.css']
})
export class AddToGroupComponent implements OnInit {

  private id;
  private first_name;
  private last_name;
  private user_id;
  private groups;

  constructor(private activatedRoute: ActivatedRoute, private groupsService: GroupsService, private userService: LoginService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.user_id = data.id
    });

    setTimeout(() => this.groupsService.addUserToGroup(this.id, this.user_id, this.first_name, this.last_name)
      .subscribe((success) => console.log(success)),800)

    this.groupsService.findReservationGroup(this.id).subscribe(data => this.groups = data)
  }

  addToReservation() {
    this.groupsService.addUserToReservation(this.id, this.user_id, this.first_name, this.last_name)
      .subscribe((success) => console.log(success))
  }

}
