import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { 
   }

  getUserData(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid)
    .map((res:Response)=> {
     let data=res.json().data;
      console.log(res.json().data)
     return data;
    }
      );
  }

   getClassesData(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/?sessionid=6j19a957h5c15gfjtodlr6drb0&fields=id|number|building_id|building_name|type|capacity&services=x_extend/room_scan' )
    .map((res:Response)=> {
     let data=res.json().data;
      console.log(res.json().data)
     return data;
    }
      );
  }


}
