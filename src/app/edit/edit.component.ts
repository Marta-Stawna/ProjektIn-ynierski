import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private myReservations;
  reservation;
  private data;
  private userId;

  constructor(private service:CommunicationService, private  userService : LoginService) { 
    this.myReservations= this.service.getReservations()
    console.log(this.myReservations);
  }


  removeReservation(reservation){
    this.service.removeReservation(reservation);
  }



  ngOnInit() {
     let sessionId = this.userService.getSessionId();
     this.service.getUserId(sessionId).subscribe(userId =>this.userId = userId);
    /** this.userService.getUserData(sessionId).subscribe(data =>this.data = data);*/

    this.reservation= this.service.getReservtion();
    if(this.reservation) this.myReservations.push(this.reservation);
  }
}