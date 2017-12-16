import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { LoginService } from './login.service';

import 'rxjs/add/operator/map';

@Injectable()
export class GroupsService {

  headers: {
    name: string;
    value: string;
  }[]
  private first_name;
  private last_name;
  private user_id;

  constructor(private http: Http, private userService: LoginService) {
    this.headers = [
    { name: 'Cache-Controlr', value: 'no-cache, no-store, must-revalidate'},
    { name: 'Pragma', value: 'no-cache'},
    { name: 'Expires', value: '0'},
    { name: 'Access-Control-Allow-Origin', value: '*'}];

    this.userService.getUserData(sessionStorage.getItem('session')).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.user_id = data.id
    });
  }

  createGroup(name, first_name, last_name) {
    let newGroup = 'dane={"collection":"groups","mode":"insert","dane":{"users":[{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name +'","nazwisko":"'+ last_name +'"}],"name":"'+ name.group +'","creator":[{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name +'","nazwisko":"'+ last_name +'"}]}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + newGroup, this.headers)
      .map((res: Response) => res.json().data)
  }

  getUserGroups(first_name, last_name) {
    let groups = 'dane={"collection":"groups", "mode":"find","dane":{ "users":{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name + '","nazwisko":"'+ last_name +'"}}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + groups, this.headers)
      .map((res: Response) => res.json().data)
  }

  getCreatorGroups(first_name, last_name) {
    let groups = 'dane={"collection":"groups", "mode":"find","dane":{ "creator":[{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name+ '","nazwisko":"'+ last_name +'"}]}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + groups, this.headers)
      .map((res: Response) => res.json().data)
  }

  removeGroup(name, first_name, last_name) {
    let group = 'dane={"collection":"groups","mode":"remove","dane":{"creator":[{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+first_name+ '","nazwisko":"'+ last_name +'"}],"name":"'+ name +'"}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  searchGroup(phrase) {
    let group = 'dane={"collection":"groups","mode":"find","dane":{"name":{"$regex":"'+ phrase +'","$options":"i"}}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  addNote(id, data) {
    let group = 'dane={"collection":"groups","mode":"update","key":{"_id":"ObjectId(\\"'+ id +'\\")"},"dane":{"$set":{"notatka":"'+ data +'"}}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  addUserToReservation(id_group, id_user, first_name, last_name) {
    console.log(id_group, 'kkkkkkkkkkkkkkkk')
    let group = 'dane={"collection":"rezerwacje","mode":"update","key":{"_id":"ObjectId(\\"'+ id_group +'\\")"},"dane":{"$addToSet":{"users":{"id_u":"'+ id_user +'","imie":"'+ first_name +'", "nazwisko":"'+ last_name +'"}}}}';
// http://213.184.22.45/querydb.php?dane={"collection":"rezerwacje","mode":"update","key":{"_id":"ObjectId(\"5a2e5b006bf095546d3c986b\")"},"dane":{"$addToSet":{"users":{"id_u":"123456","imie":"Daniela", "nazwisko":"Jurgielewicz"}}}}
    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  addUserToGroup(id_group, id_user, first_name, last_name) {
    let group = 'dane={"collection":"groups","mode":"update","key":{"_id":"ObjectId(\\"'+ id_group +'\\")"},"dane":{"$addToSet":{"users":[{"id_u":"'+ id_user +'","imie":"'+ first_name +'", "nazwisko":"'+ last_name +'"}]}}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  getGroupsInfo(id) {
    let group = 'dane={"collection":"groups","mode":"find","dane":{"_id":"ObjectId(\\"'+ id +'\\")"}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  removeUser(id_group, first_name, last_name, id_remove, first_name_remove, last_name_remove) {
    let group = 'dane={"collection":"groups","mode":"update","key":{"_id":"ObjectId(\\"'+ id_group +'\\")","creator":[{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name +'","nazwisko":"'+ last_name +'"}]},"dane":{"$pull":{"users":{"id_u":"'+ id_remove +'","imie":"'+ first_name_remove +'","nazwisko":"'+ last_name_remove +'"}}}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  removeMe(id_group, first_name, last_name) {
    let group = 'dane={"collection":"groups","mode":"update","key":{"_id":"ObjectId(\\"'+ id_group +'\\")"},"dane":{"$pull":{"users":{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name +'","nazwisko":"'+ last_name +'"}}}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

  findReservationGroup(id_group) {
    let group = 'dane={"collection":"rezerwacje","mode":"find","dane":{"id_g":"ObjectId(\\"'+ id_group +'\\")"}}';

    return this.http.get('http://213.184.22.45/querydb.php?' + group, this.headers)
      .map((res: Response) => res.json().data)
  }

}
