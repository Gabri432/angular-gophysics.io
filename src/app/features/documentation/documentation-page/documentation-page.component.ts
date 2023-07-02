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
    "all","classical", "electromagnetism", "fluids", "gravity", "relativity", "thermodynamics", "math"
  ];
  selected = 'all';

  constructor(public http: HttpClient) {
  };

  ngOnInit() {
    this.loadFunctions().subscribe(data =>{
      this.functions = data;
    })
    this.loadConstants().subscribe(data =>{
      this.constants = data;
    })
  }

  loadFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>((this.functionsUrl))
  }

  loadConstants(): Observable<Constant[]> {
    return this.http.get<Constant[]>((this.constantsUrl))
  }

  applyFilter(): void {
    if (this.selected == 'all') this.ngOnInit();
    this.functions = this.functions.filter(object => {
      return object['context'] == this.selected
    });
  }

}
