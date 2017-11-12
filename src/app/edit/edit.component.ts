import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  private sessionId;
  private userId;
  deleted : Number = 0;
  private reservationData;
  private removeRecervationData;
  progress: number = 0;
  label: string;
  private subscribtion:Subscription;

  constructor(private service:CommunicationService, private  userService : LoginService) {}

  removeReservation(reservation){
    this.service.removeReservationData(this.userService.getSessionId, reservation, this.userId)
      .subscribe(removeRecervationData =>this.removeRecervationData = removeRecervationData);

    this.deleted = 1
    setTimeout(()=>
    this.service.getReservationData(this.userService.getSessionId, this.userId)
      .subscribe(reservationData => {
        this.reservationData = reservationData;
        console.log(reservationData)}),200);
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;

    if (this.progress < 100) {
      setTimeout(() => {
        this._increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

  ngOnInit() {
    let sessionId = this.userService.getSessionId();

    this.service.getReservationData(sessionId, sessionStorage.getItem('userId'))
        .subscribe(reservationData => this.reservationData = reservationData)
  }
}
