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
  progress: number = 0;
  label: string;

  constructor(private service: CommunicationService, private userService: LoginService) {}

  removeReservation(reservation){
    this.service.removeReservationData(this.userService.getSessionId(), reservation, sessionStorage.getItem('userId'))
    .subscribe(succes => this.getReservation());
    this.deleted = 1;
    this.processWithinAngularZone();

  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    //console.log(`Current progress: ${this.progress}%`);
    if (this.progress < 100) {
      window.setTimeout(() => {
        this._increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }

  getReservation(){
    const sessionId = this.userService.getSessionId();

    this.service.getReservationData(sessionId, sessionStorage.getItem('userId'))
    .subscribe(reservationData => this.reservationData = reservationData);
  }

  ngOnInit() {
    this.getReservation();
  }
}
