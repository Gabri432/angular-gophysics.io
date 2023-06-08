import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gophysics-io';
  showHeaderAndFooter = true;

  ngOnInit() {
    switch(location.pathname) {
      case '/angular-gophysics.io/':
      case '/angular-gophysics.io/documentation':
      case '/angular-gophysics.io/about':
        break;
      default:
        this.showHeaderAndFooter = false;
    }
  }
}
