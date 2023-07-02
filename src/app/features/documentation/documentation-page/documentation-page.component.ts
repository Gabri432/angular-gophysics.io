import { Component } from '@angular/core';

import { Function } from '../models/function';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Constant } from 'src/app/features/documentation/models/constant';

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

  constructor(public http: HttpClient) {
  };

  ngOnInit() {
    this.loadFunctions();
    this.loadConstants();
  }

  loadFunctions(): void {
    this.http.get<Function[]>((this.functionsUrl)).subscribe(data =>{
      this.functions = data;
    })
  }

  loadConstants(): void {
    this.http.get<Constant[]>((this.constantsUrl)).subscribe(data =>{
      this.constants = data;
    })
  }

  applyFilter(): void {
    if (this.selected == 'all') this.loadFunctions();
    this.loadFunctions();
    this.functions = this.functions.filter(object => {
      return object['context'] == this.selected
    });
  }

}
