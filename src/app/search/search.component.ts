import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Subscription } from "rxjs/Subscription";
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private communicationService:CommunicationService,private  userService : LoginService) { }
  class = {
    name: '',
    seats: '',
    type: '',
    location: '',
    projector: true,
  }
  private userId;
  private data;
  private roomData;
  private check;
  saved : Number;
  rooms = ['A2-3','A1-2','A1-0','A2-14','A2-11','A2-21','A2-11','A2-10','A2-4'];

save(data){
  this.check=data;
  this.saved = 1;
  let sessionId = this.userService.getSessionId();
  setTimeout(()=>
     this.communicationService.checkRoomData(this.check)
      .subscribe(roomData=>this.roomData = roomData),500);
}
  ngOnInit() {
    let sessionId = this.userService.getSessionId();
    this.communicationService.getRooms(sessionId).subscribe(rooms =>this.rooms = rooms);
    this.communicationService.getUserId(sessionId).subscribe(userId =>this.userId = userId);
  }
}


