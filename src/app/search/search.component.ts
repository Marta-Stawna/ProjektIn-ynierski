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

  private userId;
  private roomData;
  private check;
  saved: Number;
  rooms;

  constructor(private communicationService: CommunicationService, private  userService: LoginService) { }

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
    this.communicationService.getRooms(sessionId).subscribe(rooms => this.rooms = rooms);
    this.communicationService.getUserId(sessionId).subscribe(userId => this.userId = userId);
  }
}
