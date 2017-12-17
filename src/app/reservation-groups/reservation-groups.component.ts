import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'app/common/communication.service';
import { LoginService } from 'app/common/login.service';
import { GroupsService } from 'app/common/groups.service';

@Component({
  selector: 'app-reservation-groups',
  templateUrl: './reservation-groups.component.html',
  styleUrls: ['./reservation-groups.component.css']
})
export class ReservationGroupsComponent implements OnInit {

  private data;
  private dataFind;
  public reservation;
  public rooms;
  private userId;
  private sessionId;
  private reservationData;
  public info;
  public groups;
  private first_name;
  private last_name;

  constructor(private communicationService: CommunicationService, private userService: LoginService, private groupsService: GroupsService) { }

  saveData(data) {
  this.reservation = data;
  this.communicationService.addGroupReservation(this.userService.getSessionId(),this.reservation, this.first_name, this.last_name, sessionStorage.getItem('userId'))
  .subscribe(reservation => {
        this.data = reservation;
        this.info = {
          status: true,
          data: ['Potwierdzenie: ','Zatwierdzono rezerwację.']
        }
      },
      error => this.info = {
        status: false,
        data: ['Sala w powyższym terminie została już wcześniej zarezerwowana: ',
      'Proszę wybrać inną salę lub wolny termin.']
    });
  }

  ngOnInit() {
    const sessionId = this.userService.getSessionId();
    this.communicationService.getRooms(sessionId).subscribe(rooms => this.rooms = rooms);

    this.userService.getUserData(sessionId).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.loadGroups();
    });
  }

  loadGroups() {
      this.groupsService.getCreatorGroups(this.first_name,this.last_name).subscribe(data => {this.groups = data; console.log(this.groups, 'gropus');})
  }
}
