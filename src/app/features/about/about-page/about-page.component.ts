import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  ngOnInit(): void {
    this.changeURLcanonical();
  }

  changeURLcanonical(): void {
    let text = document.querySelector("link[rel='canonical']")!.getAttribute("href") as string;
    if (! text!.includes("about")) {
      if (text!.includes("documentation")) {
        text = text!.replace("documentation/", "about/");
        document.querySelector("link[rel='canonical']")!.setAttribute("href", text);
      } else {
        text += "about/";
        document.querySelector("link[rel='canonical']")!.setAttribute("href", text);
      }
    }
  }

}
