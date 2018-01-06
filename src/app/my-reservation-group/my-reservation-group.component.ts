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
  private res1;
  private res2;
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;

  constructor(private service: CommunicationService, private userService: LoginService, private popup: Popup) {
    this.popup.options = {
      header: "",
      color: "#034F84",
      widthProsentage: 40,
      showButtons: true,
      confirmBtnContent: "Tak",
      cancleBtnContent: "Wróć",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
  }

  removeReservationUser(){
    this.service.removeReservationDataGroupUser(this.res2, sessionStorage.getItem('userId'), this.first_name, this.last_name)
    .subscribe(succes => this.getReservationUser());
  }

  removeReservationCreator() {
      this.service.removeReservationDataGroupCreator(this.res1, sessionStorage.getItem('userId'), this.first_name, this.last_name)
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

  clickButtonPop1(res){
    this.popup1.show();
    this.res1 = res;
    console.log(this.res1,'res1')
  }

  clickButtonPop2(res){
    this.popup2.show();
    this.res2 = res;
  }
}
