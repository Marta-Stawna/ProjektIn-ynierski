import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class GroupsService {

  headers: {
    name: string;
    value: string;
  }[]

  constructor(private http: Http) {
    this.headers = [
    { name: 'Cache-Controlr', value: 'no-cache, no-store, must-revalidate'},
    { name: 'Pragma', value: 'no-cache'},
    { name: 'Expires', value: '0'},
    { name: 'Access-Control-Allow-Origin', value: '*'}];
  }

  createGroup(name) {
    let newGroup = 'dane={"collection":"groups", "mode":"insert","dane":{ "users":[{"id_u":"'+ sessionStorage.getItem("userId") +'", "role":"creator"}], "name":"' + name.group + '"}}';

    return this.http.post('http://213.184.22.45/querydb.php?' + newGroup, this.headers)
      .map((res: Response) => res.json().data)
  }

  getGroups() {
    let groups = 'dane={"collection":"groups", "mode":"find","dane":{ "users":[{"id_u":"'+ sessionStorage.getItem("userId") +'", "role":"creator"}]}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + groups, this.headers)
      .map((res: Response) => res.json().data)
  }

  removeGroup(name) {
    let group = 'dane={"collection":"groups", "mode":"remove","dane":{ "users":[{"id_u":"'+ sessionStorage.getItem("userId") +'", "role":"creator"}],"name":"' + name + '"}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  searchGroup() {
    // let group = 'dane={"collection":"groups", "mode":"find","dane":{ "users":[{"id_u":"'+ sessionStorage.getItem("userId") +'", "role":"creator"}],"name":"' + name + '"}}';
    //
    // return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
    //   .map((res: Response) => res.json().data)
  }
}
