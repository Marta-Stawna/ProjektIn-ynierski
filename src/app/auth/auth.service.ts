import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { LoginService} from '../common/login.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http, private login: LoginService) {}

  public isAuthenticated(){
    const session = this.login.getSessionId();

    sessionStorage.setItem('session', session);
    this.login.getUserId(session).subscribe(data =>{
      sessionStorage.setItem('userId', data);
    });
    
    return this.login.getSessionId()
  }
}
