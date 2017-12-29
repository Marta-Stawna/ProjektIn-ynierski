import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService {

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

  addMessage(data, users, imie, nazwisko) {
    let message = 'dane={"collection":"messages","mode":"insert","dane":{"message":"'+ data.messages +'","users": '+ users +', "name":"'+ data.groupSelect.split(',')[1] +'","id_g":"'+  data.groupSelect.split(',')[0] +'","writer":[{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ imie +'","nazwisko":"'+ nazwisko +'"}],"date":"now"}}'

    return this.http.get('http://213.184.22.45/querydb.php?' + message, this.headers)
      .map((res: Response) => res.json().data)
  }

  allMessages(first_name, last_name) {
    let message = 'dane={"collection":"messages","mode":"find","dane":{"users":{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name +'","nazwisko":"'+ last_name +'"}}}'

    return this.http.get('http://213.184.22.45/querydb.php?' + message, this.headers)
      .map((res: Response) => res.json().data)
  }

  allMessagesWriter(first_name, last_name) {
    let message = 'dane={"collection":"messages","mode":"find","dane":{"writer":[{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name +'","nazwisko":"'+ last_name +'"}]}}'

    return this.http.get('http://213.184.22.45/querydb.php?' + message, this.headers)
      .map((res: Response) => res.json().data)
  }

  removeMyMessage(id) {
    let message = 'dane={"collection":"messages","mode":"remove","dane":{"_id":"ObjectId(\\"'+ id +'\\")"}}'

    return this.http.get('http://213.184.22.45/querydb.php?' + message, this.headers)
      .map((res: Response) => res.json().data)
  }

  removeMessage(id_messages, first_name, last_name) {
    let message = 'dane={"collection":"messages","mode":"update","key":{"_id":"ObjectId(\\"'+ id_messages +'\\")"},"dane":{"$pull":{"users":{"id_u":"'+ sessionStorage.getItem("userId") +'","imie":"'+ first_name +'","nazwisko":"'+ last_name +'"}}}}'

    return this.http.get('http://213.184.22.45/querydb.php?' + message, this.headers)
      .map((res: Response) => res.json().data)
  }
}
