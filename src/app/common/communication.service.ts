import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CommunicationService {

  public reservation;
  constructor(private http: Http) {
    this.headers = [
    {name:'Cache-Controlr', value:'no-cache, no-store, must-revalidate'},
    {name:'Pragma', value:'no-cache'},
    {name:'Expires', value:'0'},
    {name:'Access-Control-Allow-Origin', value:'*'}];
   }

  headers: {
    name: string;
    value: string;
  }[]

  getRooms(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/' + sessionid + '&fields=id|number|building_id|building_name|type|capacity&services=x_extend/room_scan', this.headers )
    .map((res:Response)=> {let rooms =res.json().data;
      return rooms;
     });}

  getPlan(sessionid){
    let url = 'https://dev.alcon.eu.org/ugather/' + sessionid + '&fields=start_time%7Cend_time%7Cname&services=tt%2Froom&rest=room_id%3D9%26';
    return this.http.get( url)
    .map((res:Response)=> {let plan =res.json().data;
    return plan;
   })
 }

 getUserId(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/' + sessionid, this.headers)
    .map((res:Response)=> {
     let data=res.json().data.id;
     return data;
    });
  }

   getReservationData(sessionid, userId){
    return this.http.get('http://213.184.22.45/querydb.php?id_u=' + userId,  this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }

 addReservationData(sessionid, reservation, userId){
     var sendReservation = 'dane={"collection":"rezerwacje", "mode":"insert", "dane":{ "id_u":"' + userId + '","sala":"' + reservation.sala + '","data":"' + reservation.date + '","godzina":"' + reservation.godzina.substring(0,5) + '"}}';
    return this.http.get('http://213.184.22.45/querydb.php?'+ sendReservation, this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }

findReservationData( reservation, userId){
     var findReservation = 'dane={"collection":"rezerwacje", "mode":"find", "dane":{ "sala":"' + reservation.sala + '","data":"' + reservation.date + '","godzina":"' + reservation.godzina.substring(0,5) + '"}}';
    return this.http.get('http://213.184.22.45/querydb.php?' + findReservation, this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return Object.keys(data).length;
    });
  }

  removeReservationData(sessionid, reservation, userId){
     var removeReservation = 'dane={"collection":"rezerwacje", "mode":"remove", "dane":{ "id_u":"'+ userId + '","sala":"'+ reservation.sala + '","data":"'+ reservation.data + '","godzina":"' + reservation.godzina +'"}}';
    return this.http.get('http://213.184.22.45/querydb.php?' + removeReservation, this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }
}
 
