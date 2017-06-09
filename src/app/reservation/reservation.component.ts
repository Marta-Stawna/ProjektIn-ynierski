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

public reservation;
public rooms;
 saved : Number;

 constructor(private service:CommunicationService,private  userService : LoginService) { }




save(data){
    this.reservation=data;
    this.service.setReservation(data);
    this.saved = 1
  }



  ngOnInit() {
    let sessionid =this.userService.getSessionId();
    this.service.getRooms(sessionid).subscribe(data => console.log(data))
  }

}
