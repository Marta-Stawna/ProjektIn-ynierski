import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  sessionId;
  constructor(private http: Http) {}

   getSessionId() {
     return this.sessionId;
   }

   setSessionId(sessionId) {
     if(sessionId)
      this.sessionId = sessionId;
     else {
       this.sessionId = sessionStorage.getItem('session');
     }
   }

  getUserData(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid)
    .map((res: Response) => {
       let data = res.json().data;
       return data;
    });
  }

  getUserId(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid)
    .map((res: Response) =>  res.json().data.id)
  }
}
