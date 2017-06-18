import { Component, OnInit} from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";
import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Subscription } from "rxjs/Subscription";
//import {Alert} from '@angular/bootstrap';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private data;
  public reservation;
  public rooms;
  private userId;
  saved : Number;
  //checked : Number;
  private reservationData;
  constructor(private communicationService:CommunicationService,private  userService : LoginService) { }

 //check(data){
 //     this.checked = 0
 //     this.reservation=data;
  //    if (this.reservation.data != this.reservationData.data){//) && (this.reservation.godzina != this.reservationData.godzina) && (this.reservation.sala != this.reservationData.sala)){
  //            this.checked = 1
 //     }
 //   }

  save(data){
      this.saved = 0
      this.reservation=data;
     // this.check(this.reservation)
    //  if (this.checked == 1){
      this.communicationService.addReservationData(this.userService.getSessionId, this.reservation, this.userId).subscribe(reservation =>{this.data = reservation;console.log(data)});
                  this.saved = 1
      for (let res of this.reservationData) {
          if ((this.reservation.data != this.reservationData.data) && (this.reservation.godzina != this.reservationData.godzina) && (this.reservation.sala != this.reservationData.sala)){  
                  this.communicationService.addReservationData(this.userService.getSessionId, this.reservation, this.userId).subscribe(reservation =>{this.data = reservation;console.log(data)});
                  this.saved = 1
            } else
            this.saved = 0
        }
  }

  ngOnInit() {
    let sessionId = this.userService.getSessionId();
   this.communicationService.getRooms(sessionId).subscribe(rooms =>{this.rooms = rooms; console.log(rooms)});
          this.communicationService.getUserId(sessionId).subscribe(userId =>this.userId = userId);
   this.communicationService.getReservationData(sessionId, this.userId).subscribe(reservationData =>{this.reservationData = reservationData;console.log(reservationData)});

  }
}
