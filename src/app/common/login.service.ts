import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getUserData(id) : Observable<Object>{
    return this.http.get('https://dev.alcon.eu.org/ugather/?sessionid='+id).map((res:Response)=> res.json());
  }

}
