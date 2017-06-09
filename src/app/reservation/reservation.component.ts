import { Component, OnInit} from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";
import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Subscription } from "rxjs/Subscription";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

public reservation;
public rooms;
 saved : Number;
 private numbers = [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,64,69,70,71,72,73,74,75,78,79,80,81,84,136,139,141,142,143,147,154,396,451,456,468];


save(data){
    this.reservation=data;
    this.service.setReservation(data);
    this.saved = 1
  }

  constructor(private service:CommunicationService,private  userService : LoginService) { }
    type: ''
  }

  public classes;
  private subscribtion:Subscription;
 constructor(private userService:LoginService,private service:CommunicationService) { }
 

  ngOnInit() {
    let sessionid =this.userService.getSessionId();
    this.service.getRooms(sessionid).subscribe(data => console.log(data))
     let search:String=location.search;
    this.subscribtion=this.userService.getClassesData(search).subscribe(data=>{this.classes=data;console.log(data)});
       console.log(this.classes)
  }

   ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }
}
