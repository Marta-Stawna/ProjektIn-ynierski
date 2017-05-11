import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/common/login.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
   headMessage : string;
    selectedRow : Number;
    selectedCol : Number;
    setClickedRow : Function;
    setClickedCol : Function;
    classes : [{
        hours: string,
        availableMon : boolean,
        availableTue : boolean,
        availableWed : boolean,
        availableThu : boolean,
        availableFri : boolean,
        availableSat : boolean,
        availableSun : boolean
    }];

  public user;
  private subscribtion:Subscription;
  
    constructor(private userService:LoginService) {
        this.headMessage = "Wybierz dzień tygodnia i datę";
       
        this.classes = [{
            hours : "8:15-9:45",
            availableMon : true,
            availableTue : false,
            availableWed : false,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
        {
            hours : "10:00-11:30",
            availableMon : true,
            availableTue : false,
            availableWed : false,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
        {
            hours : "11:45-13:15",
            availableMon : true,
            availableTue : false,
            availableWed : true,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
        {
            hours : "13:45-15:15",
            availableMon : true,
            availableTue : false,
            availableWed : false,
            availableThu : true,
            availableFri : false,
            availableSat : false,
            availableSun : false
        },
        {
            hours : "15:30-17:00",
            availableMon : true,
            availableTue : false,
            availableWed : true,
            availableThu : false,
            availableFri : false,
            availableSat : true,
            availableSun : false
        },
         {
            hours : "17:15-18:45",
            availableMon : false,
            availableTue : false,
            availableWed : false,
            availableThu : true,
            availableFri : false,
            availableSat : true,
            availableSun : false
        }];
        this.setClickedRow = function(index){
            this.selectedRow = index ;
        }
        this.setClickedCol = function(index2){
            this.selectedCol = index2;
        }

    };
     
   }

  ngOnInit() {
    let search:String=location.search;
    this.subscribtion=this.userService.getUserData(search).subscribe(data=>{this.user=data;console.log(data)});
       console.log(this.user)
  }
     ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }

}