import { Component, OnInit} from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

public reservation;
public rooms;
 saved : Number;

  save(data){
    this.reservation=data;
    this.service.setReservation(data);
    this.saved = 1
  }

  constructor(private service:CommunicationService,private  userService : LoginService) { }

  ngOnInit() {
    let sessionid =this.userService.getSessionId();
    this.service.getRooms(sessionid).subscribe(data => console.log(data))
  }

}
