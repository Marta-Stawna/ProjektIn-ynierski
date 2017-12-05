import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.css']
})
export class SearchGroupComponent implements OnInit {

  private groupData = [
    {
      name: 'aaaa',
      role: 'admin',
      room: 'Aula A',
      date: '12-12-2017'
    },
    {
      name: 'bbbb',
      role: 'uczestnik',
      room: 'Aula A',
      date: '16-12-2017'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

  save(data) {
    console.log(data)
  }

}
