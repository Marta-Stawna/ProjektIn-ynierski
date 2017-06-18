import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  sessionId;
  constructor(private http: Http) {
   }
  userId;

   getSessionId(){
     return this.sessionId;
   }

   getUserId(){
     return this.userId;
   }


   setSessionId(sessionId){
     this.sessionId = sessionId;
   }

   setUserId(userId){
     this.userId = userId;
   }

  getUserData(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }
}
