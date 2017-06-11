import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  sessionId;
  constructor(private http: Http) {
   }

   getSessionId(){
     return this.sessionId;
   }

   setSessionId(sessionId){
     this.sessionId = sessionId;
   }

   /*setUserData(){
     this.data = data; 
   }

   getUserData(){
     data = getUserData(sessionid);  
     return this.data;
   }*/

  getUserData(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }
  

}
