import { Component } from '@angular/core';

import { Function } from '../../../core/models/function';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/models/constant';

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

  constructor(public http: HttpClient) {
  };

  ngOnInit() {
    this.loadFunctions().subscribe(data =>{
      this.functions = data;
    })
  }

  loadFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>((this.functionsUrl))
  }

  loadConstants(): Observable<Constant[]> {
    return this.http.get<Constant[]>((this.constantsUrl))
  }

}
