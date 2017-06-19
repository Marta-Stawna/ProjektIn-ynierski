import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from "app/common/login.service";
import {CommunicationService } from 'app/common/communication.service';
import { Subscription } from "rxjs/Subscription";
import {  DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

 private labels = [];
 private schedule;
 private plan;
 private id;
 private rooms;
 private idRoom = 9;
 private color : string = "";
 hours = ['8:15 - 9:45 ','10:00 - 11:30','11:45 - 13.15','13:45 - 15:15','15:30 - 17:00','17:15 - 18:45'];

 constructor(private userService:LoginService, private communicationService : CommunicationService ) {
        this.schedule = [
         ['wolny','wolny','wolny','wolny','wolny'],
         ['wolny','wolny','wolny','wolny','wolny'],
         ['wolny','wolny','wolny','wolny','wolny'],
         ['wolny','wolny','wolny','wolny','wolny'],
         ['wolny','wolny','wolny','wolny','wolny'],
         ['wolny','wolny','wolny','wolny','wolny']];
    this.getRooms();
}

displayPlan(id){
  return this.idRoom = id;
}
 setColor(data){
        if(data=='wolny') return this.color="green";
      }

 getLabels(data){
   return this.labels = data
 }

/**getUserId(data){
  let plan = Object.keys(data).map(function (key) { return data[key]; });
  return this.plan = this.id;
}*/
getRooms(){
    let sessionId = this.userService.getSessionId();
    this.communicationService.getRooms(sessionId).subscribe(rooms =>this.rooms = rooms);
}

 getPlan(data){
   this.schedule = [
    ['wolny','wolny','wolny','wolny','wolny'],
    ['wolny','wolny','wolny','wolny','wolny'],
    ['wolny','wolny','wolny','wolny','wolny'],
    ['wolny','wolny','wolny','wolny','wolny'],
    ['wolny','wolny','wolny','wolny','wolny'],
    ['wolny','wolny','wolny','wolny','wolny']];
  let plan = Object.keys(data).map(function (key) { return data[key]; });
  plan.map((item,index)=>{
      for(let i = 0 ; i < item.length; i++){
        if(item[i].start_time.substring(11,16)=='08:15')
          this.schedule[0][index] = item[i].name.pl;
        if(item[i].start_time.substring(11,16)=='10:00')
            this.schedule[1][index] = item[i].name.pl;
        if(item[i].start_time.substring(11,16)=='11:45')
                this.schedule[2][index] = item[i].name.pl;
        if(item[i].start_time.substring(11,16)=='13:45')
                this.schedule[3][index] = item[i].name.pl;
        if(item[i].start_time.substring(11,16)=='15:30')
                this.schedule[4][index] = item[i].name.pl;
        if(item[i].start_time.substring(11,16)=='17:15')
                this.schedule[5][index] = item[i].name.pl;
      }
  })
  return this.plan = this.schedule;
  }

  ngOnInit() {
  }
}
