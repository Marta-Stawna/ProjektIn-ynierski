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
public reservation;
public rooms;
 saved : Number;

 constructor(private communicationService:CommunicationService,private  userService : LoginService) { }

save(data){
    this.reservation=data;
    this.communicationService.setReservation(data);
    this.saved = 1
  }

  ngOnInit() {
    let sessionId = this.userService.getSessionId();
   /** this.communicationService.getRooms(sessionId).subscribe(data =>this.data = data);
    var myjson = JSON.parse(this.data);*/
}

}
