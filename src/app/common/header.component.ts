import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
          <div class="header">
            <ng-content></ng-content>
          </div>
  `,
  styles: [`.header{background-color:rgb(128, 0, 128);width:100%;height:50px; color:white}`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
