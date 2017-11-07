import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
