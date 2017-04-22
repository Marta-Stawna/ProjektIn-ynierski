import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
    </div>
  `,
  styles: [`.footer{background-color:black;height:50px}`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
