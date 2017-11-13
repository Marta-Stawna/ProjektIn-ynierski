import { Component } from '@angular/core';
import { LoginService } from './common/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private login: LoginService, private router: Router){}

  logOut(){
    this.login.setSessionId('');
  }
}
