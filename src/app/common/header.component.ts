import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/common/login.service";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-header',
  template: `
          <div class="header">
            <div [style.display]="path">
            <ng-content></ng-content></div>
            <div *ngIf="user" class="user">
              Jesteś zalogowany jako: {{user.first_name }} {{user.last_name}} |
              <a href="https://dev.alcon.eu.org/ugather/?logout">Wyloguj się</a>
            </div>
          </div>
  `,
  styles: [`.header {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              height: 50px;
              background-color:#034F84;
              color: white
            }
            .user {
              margin: 10px;
              padding: 5px;
            }

            a {
              text-decoration: none;
              color: #fff;
              font-weight: bold;
            }

            @media screen and (max-width: 780px) {
              .header {
                height: 100%;
              }
            }`
          ]
})
export class HeaderComponent implements OnInit {

  public user;
  private subscribtion: Subscription;
  public path ='none';

  constructor(private userService: LoginService) { }

  ngOnInit() {
    let search: String = location.search;
    if(search) {
      this.userService.setSessionId(search);
      this.subscribtion = this.userService.getUserData(search).subscribe(data => this.user = data);
    } else {
      this.userService.setSessionId(sessionStorage.getItem('session'));
      this.subscribtion = this.userService.getUserData(sessionStorage.getItem('session'))
        .subscribe(data => this.user = data);
    }
  }

  ngAfterContentChecked() {
    if(location.pathname === '/login') this.path = 'none';
    else this.path = 'block';

    return this.path;
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}
