import { Component } from '@angular/core';

import { Function } from '../models/function';
import { HttpClient } from "@angular/common/http";
import { Constant } from 'src/app/features/documentation/models/constant';
import { LoadValuesService } from '../services/load-values.service';

@Component({
  selector: 'app-documentation-page',
  templateUrl: './documentation-page.component.html',
  styleUrls: ['./documentation-page.component.scss']
})
export class DocumentationPageComponent {

  private functionsUrl = 'assets/database/functions.json';
  private constantsUrl = 'assets/database/constants.json';
  functions: Array<Function> = [];
  constants: Array<Constant> = [];
  libraries: Array<String> = [
    "all","classical", "electromagnetism", "fluids", "gravity", "relativity", "thermodynamics"
  ];
  selected = 'all';

  constructor(public http: HttpClient, public load: LoadValuesService) {
  };

  ngOnInit() {
    this.loadFunctions();
    this.loadConstants();
    this.changeURLcanonical();
  }

  loadFunctions(): void {
    this.http.get<Function[]>((this.functionsUrl)).subscribe(data =>{
      if (this.selected == 'all') {
        this.functions = data;
        this.load.setFormulas(data);
        return;
      }
      this.functions = data.filter(object => {
        return object['context'] == this.selected
      });
      this.load.setFormulas(this.functions);
    })
  }

  loadConstants(): void {
    this.http.get<Constant[]>((this.constantsUrl)).subscribe(data =>{
      this.constants = data;
      this.load.setConstants(this.constants);
    })
  }

  changeURLcanonical(): void {
    let text = document.querySelector("link[rel='canonical']")!.getAttribute("href") as string;
    if (! text!.includes("documentation")) {
      if (text?.includes("about")) {
        text = text.replace("about", "documentation");
        document.querySelector("link[rel='canonical']")!.setAttribute("href", text);
      } else {
        text += "documentation";
        document.querySelector("link[rel='canonical']")!.setAttribute("href", text);
      }
    }
  }

}
