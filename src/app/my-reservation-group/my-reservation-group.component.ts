import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";
import { Popup } from 'ng2-opd-popup';

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
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;

  constructor(private service: CommunicationService, private userService: LoginService, private popup: Popup) {
    this.popup.options = {
      header: "",
      color: "purple",
      widthProsentage: 40,
      showButtons: true,
      confirmBtnContent: "Tak",
      cancleBtnContent: "Wróć",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
  }

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

  clickButtonPop1(){
    this.popup1.show();
  }

  clickButtonPop2(){
    this.popup2.show();
  }
}
