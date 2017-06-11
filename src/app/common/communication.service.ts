import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CommunicationService {
reservationData = [ ]
    myReservations=[{
      id:1,
      date:'31/05/2017',
      hours:'11.45 - 13.15',
      room:'A2-22',
    },
    {
      id:2,
      date:'18/06/2017',
      hours:'10:00 - 11:30',
      room:'A1-18',
    },
    {
      id:3,
      date:'22/06/2017',
      hours:'8:15 - 9:45',
      room:'A0-10',
    },
    {
      id:4,
      date:'23/06/2017',
      hours:'11.45 - 13.15',
      room:'A2-22',
    },
    {
      id:5,
      date:'01/07/2017',
      hours:'13.45 - 15.15',
      room:'A1-24',
    }];



  public reservation;
  constructor(private http: Http) {
    this.headers = [
    {name:'Cache-Controlr', value:'no-cache, no-store, must-revalidate'},
    {name:'Pragma', value:'no-cache'},
    {name:'Expires', value:'0'}];
   }

  getReservations(){
       return this.myReservations;
   }

  setReservation(data){
    return this.reservation=data;
  }

  getReservtion(){
      return this.reservation;
  }

  removeReservation(reservation){
    let index=parseInt(reservation);
    this.myReservations.splice(index,1);
  }

headers: {
    name: string;
    value: string;
}[]

  getRooms(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/?sessionid=bepjb0j4hidr5bbtg6mra3f5k5&fields=id|number|building_id|building_name|type|capacity&services=x_extend/room_scan', this.headers )
    .map((res:Response)=> {let rooms =res.json().data;
      return rooms;
     });}

  getPlan(sessionid){
    let url = 'https://dev.alcon.eu.org/ugather/'+sessionid+'&fields=start_time%7Cend_time%7Cname&services=tt%2Froom&rest=room_id%3D9%26';
    return this.http.get( url)
    .map((res:Response)=> {let plan =res.json().data;
    return plan;
   })
 }

 getUserId(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid, this.headers)
    .map((res:Response)=> {
     let data=res.json().data.id;
     return data;
    });
  }

/** POST RESERVATION opcja 1 https://auth0.com/blog/angular-2-series-part-3-using-http/*/
saveReservation(data) {
  if(data) {
    localStorage.setItem('id_token', data)
  }
}
 private creds;
  postReservation(sessionid){
  var creds = "userid=" + this.getUserId(sessionid) ;
  return this.http.post('http://dev.alcon.edu.org/found/'+ sessionid, this.creds)
  .map(res => res.json())
    .subscribe(
      data => this.saveReservation(data.id_token)/**,
      () => console.log('Authentication Complete')*/
    );
  }


  /** POST RESERVATION opcja 2 http://www.syntaxsuccess.com/viewarticle/angular-2.0-and-http    */
postReservation2(sessionid){
var headers = new Headers();
headers.append('Content-Type', 'application/json');

this.http.post('https://gurujsonrpc.appspot.com/guru', 
                      {userId: '1234',reservationId:'1', room:'A2-22',date:'31/05/2017',hours:'11.45 - 13.15'},
                      {headers:headers})
.map((res: Response) => res.json());
}

}

/**
.subscribe((res:Person) => this.postResponse = res);
 */


/** 
 getUserId(sessionid){
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid)
    .map((res:Response)=> {
     let data=res.json().data.id;
     return data;
    });
 }*/
/** 
 getReservationData(sessionid){
    let url = 'https://dev.alcon.eu.org/ugather/'+sessionid+'&fields=start_time%7Cend_time%7Cname&services=tt%2Froom&rest=room_id%3D9%26';
    return this.http.get( url)
    .map((res:Response)=> {let reservation =res.json().data;
    return reservation;
   })*/

   /** druga opcja z callback
  getReservationData(idsession, idUser, callback){
    let url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${idsession} + idUser`
  
    this.http.get(url)
    .subscribe((response:Response)=>{
      let data = response.json()
      let reservation = data.myReservation.items;
      this.reservation = reservation;
      callback(reservation)
    })
  }

  getReservationDetails(callback){
    let idsession = '?sessionid=16dpk8lfr4s98n360oqaeg1s85'
    this.getReservationData(idsession, callback);
  }
 */
 
