import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit { 
 saved : Number;

  save(event){
    console.log('Zapisano', event)
    this.saved = 1
  } 

  constructor() { }

  ngOnInit() {
  }

}
