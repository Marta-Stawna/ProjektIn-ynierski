import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  private groups = [
    {
      name: 'Pierwsza grupa',
      role: 'uczestnik'
    },
    {
      name: 'Druga grupa',
      role: 'admin'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

  adminPanel() {
    console.log("Admin Panel")
  }

}
