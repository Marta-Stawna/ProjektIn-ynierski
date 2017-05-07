import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";


import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { 
   
  }

  getUserData(sessionid){
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token')
    return this.http.get('https://dev.alcon.eu.org/ugather/'+sessionid,headers)
    .map((res:Response)=> {
     
      let data=res.json();
      console.log(data)}
      );
  }

}
