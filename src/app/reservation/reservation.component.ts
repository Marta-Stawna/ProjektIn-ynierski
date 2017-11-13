import { Component, OnInit} from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";
import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  private data;
  private dataFind;
  public reservation;
  public rooms;
  private userId;
  private sessionId;
  saved : Number;
  private reservationData;

  constructor(private communicationService: CommunicationService, private userService: LoginService) { }

  save(data) {
  this.saved = 1
  this.reservation = data;

  this.communicationService.findReservationData(this.reservation, sessionStorage.getItem('userId'))
  .subscribe(reservation => {
    if(reservation == 0)
      this.communicationService.addReservationData(this.userService.getSessionId(), this.reservation, sessionStorage.getItem('userId'))
      .subscribe(reservation => this.data = reservation)
    else {
      this.saved =0;
      }
    });
  }

  ngOnInit() {
    const sessionId = this.userService.getSessionId();
    this.communicationService.getRooms(sessionId).subscribe(rooms => this.rooms = rooms);

    this.communicationService.getReservationData(sessionId, sessionStorage.getItem('userId'))
    .subscribe(reservationData => this.reservationData = reservationData);
  }
}
