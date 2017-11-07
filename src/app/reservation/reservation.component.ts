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
  constructor(private communicationService: CommunicationService,private  userService: LoginService) { }

  save(data){
  this.saved = 1
  this.reservation = data;

  for(let res of this.reservationData) {
    let sessionId = this.userService.getSessionId();
    this.communicationService.getUserId(sessionId).subscribe(userId =>this.userId = userId);
       setTimeout(()=>
        this.communicationService.getReservationData(this.sessionId, this.userId)
        .subscribe(reservationData =>this.reservationData = reservationData),500);
        if (res.data == this.reservation.date && res.sala == this.reservation.sala &&  res.godzina == this.reservation.godzina.substring(0,5)) {
        this.saved = 0
      }
  }
  this.communicationService.findReservationData( this.reservation, this.userId)
        .subscribe(reservation =>{this.dataFind = reservation,console.log(this.dataFind)})
  if (this.saved == 1 && setTimeout(()=>this.dataFind == 0,200)){
            setTimeout(()=> this.communicationService.addReservationData(this.userService.getSessionId, this.reservation, this.userId)
          .subscribe(reservation =>{this.data = reservation, console.log(data)}), 500);
           setTimeout(()=>
        this.communicationService.getReservationData(this.sessionId, this.userId)
      .subscribe(reservationData =>this.reservationData = reservationData),500);

    }
  } 

  ngOnInit() {
    let sessionId = this.userService.getSessionId();

    this.communicationService.getRooms(sessionId).subscribe(rooms => this.rooms = rooms);
    this.communicationService.getUserId(sessionId).subscribe(userId =>this.userId = userId);

    setTimeout(()=>
      this.communicationService.getReservationData(sessionId, this.userId)
      .subscribe(reservationData =>this.reservationData = reservationData),500);
  }
}
