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

  constructor(private communicationService: CommunicationService, private userService: LoginService) { }

  class = {
    name: '',
    seats: '',
    type: '',
    location: '',
    projector: true,
  }

  private data;
  private roomData;
  private check;
  saved : Number;
  private rooms;

  save(data) {
    const sessionId = sessionStorage.getItem('session');
    this.check = data;
    this.saved = 1;

    this.communicationService.checkRoomData(this.check)
    .subscribe(roomData =>  this.roomData = roomData);
}

  ngOnInit() {
    let sessionId = this.userService.getSessionId();
    this.communicationService.getRooms(sessionId).subscribe(rooms => this.rooms = rooms);
  }
}
