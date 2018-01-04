import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer" >
	    <div class="contact" style="font-size:medium;" routerLinkActive="active"><a routerLink="/dashboard">Kontakt | Informacje</a></div>
      <div class="image"> <img src='app/about/wmi.jpg' height="auto" width="396"></div>
    </div>

  `,
  styles: [`
    .footer {
      background: white;
      text-align: center;
      margin: 30px;
    }

    .image {
 	    float: right;
    }

    .contact{
 	    float: left;
    }

    @media screen and (max-width: 780px) {

      img {
        display: none;
    }
}
  `]
})
export class FooterComponent {}
