import { Component, OnInit} from '@angular/core';
import { CommunicationService } from "app/common/communication.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit { 

public reservation;
 saved : Number;

  save(data){
    this.reservation=data;
    this.service.setReservation(data);
    this.saved = 1
  } 

  constructor(private service:CommunicationService) { }

  ngOnInit() {
  }

}
