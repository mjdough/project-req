import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [
    `
      .nav.nav-pills {
      float: right;
      width: 400px;
      position: relative;
    }
    `
    ],
})
export class HeaderComponent {

}
