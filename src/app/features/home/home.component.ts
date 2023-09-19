import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(): void {
    this.changeURLcanonical();
  }

  changeURLcanonical(): void {
    let text = document.querySelector("link[rel='canonical']")!.getAttribute("href");
    if (text!.includes("documentation")) {
      text = text!.replace("documentation/", "");
      document.querySelector("link[rel='canonical']")!.setAttribute("href", text);
    }
    if (text!.includes("about")) {
      text = text!.replace("about/", "");
      document.querySelector("link[rel='canonical']")!.setAttribute("href", text);
    }
  }

}
