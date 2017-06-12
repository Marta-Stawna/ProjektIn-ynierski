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
  saved : Number;
  rooms = ['A2-3','A1-2','A1-0','A2-14','A2-11','A2-21','A2-11','A2-10','A2-4'];
  save(event){
    console.log('Zapisano', event)
    this.saved = 1;
  }

ngOnInit() {
}
}


