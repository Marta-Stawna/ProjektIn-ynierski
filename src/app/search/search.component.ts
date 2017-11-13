import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { CommunicationService } from 'app/common/communication.service';
import { LoginService } from 'app/common/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor(private communicationService: CommunicationService, private userService: LoginService) { }

  private roomData;
  private data;
  saved : Number;
  private rooms;

  save(data) {
    this.data = data;
    this.saved = 1;

    this.communicationService.checkRoomData(this.data)
    .subscribe(roomData => this.roomData = roomData);
  }

  ngOnInit() {
    let sessionId = this.userService.getSessionId();
    this.communicationService.getRooms(sessionId).subscribe(rooms => this.rooms = rooms);
  }
}
