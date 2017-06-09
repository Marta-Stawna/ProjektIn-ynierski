import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/common/login.service";
import { Subscription } from "rxjs/Subscription";
import {  DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

 private classes: any;
 private classesSchedule;
 private color : string = "";
 public current_date = new Date();
 objDate = Date.now();
 d = new Date();
nrDayWeek = this.d.getDay();
hour = ['09:45','11:30','13.15','15:15','17:00','18:45'];

constructor(private userService:LoginService,private datePipe: DatePipe) {
       
        this.classes = [{
            hours : "8:15 - 9:45",
            availableMon : false,
            availableTue : false,
            availableWed : false,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
        {
            hours : "10:00 - 11:30",
            availableMon : false,
            availableTue : false,
            availableWed : false,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
        {
            hours : "11:45 - 13:15",
            availableMon : false,
            availableTue : false,
            availableWed : true,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
        {
            hours : "13:45 - 15:15",
            availableMon : false,
            availableTue : false,
            availableWed : false,
            availableThu : true,
            availableFri : false,
            availableSat : false,
            availableSun : false
        },
        {
            hours : "15:30 - 17:00",
            availableMon : false,
            availableTue : false,
            availableWed : true,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
         {
            hours : "17:15 - 18:45",
            availableMon : false,
            availableTue : false,
            availableWed : false,
            availableThu : true,
            availableFri : false,
            availableSat : true,
            availableSun : false
        }];

    }

    setColor(data){
        if(data) return this.color="#800000";
    }
     
  private subscribtion:Subscription;
 

  ngOnInit() {
     let search:String=location.search;
    this.subscribtion=this.userService.getScheduleData(search).subscribe(data=>{this.classesSchedule=data;console.log(data)});
       console.log(this.classesSchedule)
  }

   ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }
}