import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-my-reservation-group',
  templateUrl: './my-reservation-group.component.html',
  styleUrls: ['./my-reservation-group.component.css']
})
export class MyReservationGroupComponent implements OnInit {
  private sessionId;
  private userId;
  private reservationDataUser;
  private reservationDataCreator;
  private first_name;
  private last_name;

  constructor(private service: CommunicationService, private userService: LoginService) {}

  removeReservationUser(reservation){
    this.service.removeReservationDataGroupUser(reservation, sessionStorage.getItem('userId'), this.first_name, this.last_name)
    .subscribe(succes => this.getReservationUser());
  }

  removeReservationCreator(reservation) {
      this.service.removeReservationDataGroupCreator(reservation, sessionStorage.getItem('userId'), this.first_name, this.last_name)
      .subscribe(succes => {
        this.getReservationCreator();
      });
  }

  getReservationUser(){
    this.service.getReservationDataGroupUser(sessionStorage.getItem('userId'), this.first_name, this.last_name)
    .subscribe(reservationData => this.reservationDataUser = reservationData);
  }

  getReservationCreator(){
    this.service.getReservationDataGroupCreator(sessionStorage.getItem('userId'), this.first_name, this.last_name)
    .subscribe(reservationData => this.reservationDataCreator = reservationData);
  }

  ngOnInit() {
    const sessionId = this.userService.getSessionId();

    this.userService.getUserData(sessionId).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.getReservationUser();
      this.getReservationCreator();
    });
  }
}
