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
      case '/':
      case '/about':
      case '/documentation':
        break;
      default:
        this.showHeaderAndFooter = false;
    }
  }
}
