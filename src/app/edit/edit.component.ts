import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";
import { Subscription } from "rxjs/Subscription";
import { Popup } from 'ng2-opd-popup';

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
  private first_name;
  private last_name;

  constructor(private service: CommunicationService, private userService: LoginService, private popup: Popup) {
    this.popup.options = {
      header: "",
      color: "purple",
      widthProsentage: 40,
      showButtons: true,
      confirmBtnContent: "Tak",
      cancleBtnContent: "Wróć",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
  }

  removeReservation(reservation){
    this.service.removeReservationData(this.userService.getSessionId(), reservation, sessionStorage.getItem('userId'), this.first_name, this.last_name)
    .subscribe(succes => this.getReservation());
    this.deleted = 1;
    this.processWithinAngularZone();

  }

  clickButton(){
    this.popup.show();
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
    this.service.getReservationDataIndyvidual(sessionStorage.getItem('userId'), this.first_name, this.last_name)
    .subscribe(reservationData => this.reservationData = reservationData);
  }

  ngOnInit() {
    const sessionId = this.userService.getSessionId();

    this.userService.getUserData(sessionId).subscribe(data => {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.getReservation();
    });
  }
}
