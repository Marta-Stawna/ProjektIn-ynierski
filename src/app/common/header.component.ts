import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/common/login.service";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-header',
  template: `
          <div class="header">
            <ng-content></ng-content>
            <div *ngIf="user" class="user">
              Jesteś zalogowany jako: {{user.first_name }} {{user.last_name}}
              
            </div>
          </div>
  `,
  styles: [`.header{
                  display:flex; flex-direction: row;justify-content:space-between;
                  background-color:rgb(128, 0, 128);width:100%;height:50px; color:white}
             .user{margin: 10px; padding:5px;}`]
})
export class HeaderComponent implements OnInit {

  public user;
  private subscribtion:Subscription;

  constructor(private userService:LoginService) { }

  ngOnInit() {
    let search:String=location.search;
    this.userService.setSessionId(search);
    this.subscribtion=this.userService.getUserData(search).subscribe(data=>this.user=data);
  }
   ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }
}
