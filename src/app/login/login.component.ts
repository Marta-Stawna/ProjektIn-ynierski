import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  private subscribtion:Subscription;

  constructor(private userService:LoginService) { }

  ngOnInit() {
    this.subscribtion=this.userService.getUserData().subscribe(data=>{console.log(data);this.user=data});
    console.log(this.user)
  }

   ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }

}
