import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/common/login.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user;
  private subscribtion:Subscription;
  
  constructor(private userService:LoginService) {

   }

  ngOnInit() {
    let search=location.search;
     this.subscribtion=this.userService.getUserData(search).subscribe(data=>{console.log(data);this.user=data});
      console.log(this.user)
  }
     ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }

}
