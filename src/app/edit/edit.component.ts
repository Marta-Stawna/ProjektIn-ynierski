import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private myReservations;
  reservation;
  constructor(private service:CommunicationService) { 
    this.myReservations= this.service.getReservations()
    console.log(this.myReservations);
  }
  removeReservation(reservation){
    this.service.removeReservation(reservation);
  }
  ngOnInit() {
    this.reservation= this.service.getReservtion();
    if(this.reservation) this.myReservations.push(this.reservation);

  }

}