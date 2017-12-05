import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  private groupData = [
    {
      name: 'aaaa',
      role: 'admin',
      room: 'Aula A',
    },
    {
      name: 'bbbb',
      role: 'uczestnik',
      room: 'Aula A',
    },

  ]

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];

  }

}
