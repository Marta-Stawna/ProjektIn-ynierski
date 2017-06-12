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
    {name:'Expires', value:'0'},
    {name:'Access-Control-Allow-Origin', value:'*'}];
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
    return this.http.get('https://dev.alcon.eu.org/ugather/'+ sessionid +'&fields=id|number|building_id|building_name|type|capacity&services=x_extend/room_scan', this.headers )
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

   getReservationData(sessionid){
    return this.http.get('http://213.184.22.45/querydb.php?id_u='+ this.getUserId(sessionid), this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }

/*dane={%22collection%22:%22rezerwacje%22,%20%22mode%22:%22find%22,%20%22dane%22:{%20%22id_u%22:%22433663%22}}
'dane={"collection":"rezerwacje", "mode":"find", "dane":{ "id_u":"433663"}}'
dane={"collection":"rezerwacje", "mode":"insert", "dane":{ "id_u":"461837","id_r":1,"sala":"A1-14","data":"01-05-2017","godzina":"11:45"}}
dane={"collection":"rezerwacje", "mode":"remove", "dane":{ "id_u":"461837","id_r":1,"sala":"A1-14","data":"01-05-2017","godzina":"11:45"}}
var sendReservation = 'dane={"collection":"rezerwacje", "mode":"insert", "dane":{ "id_u":"461837","id_r":1,"sala":"'+ reservation.sala +'","data":"01-05-2017","godzina":"'+reservation.godzina.substring(0,5)+'"}}';*/
  addReservationData(sessionid, reservation){
     var sendReservation = 'dane={"collection":"rezerwacje", "mode":"insert", "dane":{ "id_u":"' + this.getUserId(sessionid) + '","id_r":1,"sala":"'+ reservation.sala +'","data":"'+ reservation.date + '","godzina":"'+reservation.godzina.substring(0,5)+'"}}';
    return this.http.get('http://213.184.22.45/querydb.php?'+ sendReservation, this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }

findReservationData(sessionid){
     var findReservation = 'dane={"collection":"rezerwacje", "mode":"find", "dane":{ "id_u":"'+this.getUserId(sessionid)+'"}}';
    return this.http.get('http://213.184.22.45/querydb.php?'+ findReservation, this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }

  removeReservationData(sessionid, reservation){
     var removeReservation = 'dane={"collection":"rezerwacje", "mode":"remove", "dane":{ "id_u":"'+this.getUserId(sessionid)+'","id_r":'+ reservation.id_r +',"sala":"'+ reservation.sala +'","data":"'+ reservation.data + '","godzina":"'+ reservation.godzina +'"}}';
    return this.http.get('http://213.184.22.45/querydb.php?'+ removeReservation, this.headers)
    .map((res:Response)=> {
     let data=res.json().data;
     return data;
    });
  }
}


/** POST RESERVATION opcja 1 https://auth0.com/blog/angular-2-series-part-3-using-http/
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
      data => this.saveReservation(data.id_token),
      () => console.log('Authentication Complete')
    );
  }*/


  /** POST RESERVATION opcja 2 
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
 
