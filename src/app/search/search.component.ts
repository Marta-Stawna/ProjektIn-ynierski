import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Subscription } from "rxjs/Subscription";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  class = {
    name: 'A2',
    seats: '1-14',
    type: 'dowolny',
    location: 'dowolne',
    projector: false,
  }
  
  save(event){
    console.log('Zapisano', event)
  }

ngOnInit() {
}
}


