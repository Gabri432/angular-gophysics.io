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
    if (!location.pathname.includes('/angular-gophysics.io/') || location.pathname.includes('/error-page')) {
      this.showHeaderAndFooter = false;
    }
    console.log(location.pathname);
  }
}
