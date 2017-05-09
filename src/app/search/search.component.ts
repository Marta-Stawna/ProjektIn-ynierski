import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title = 'Wyszukiwanie sali';

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
  constructor() { }

  ngOnInit() {
  }

}


