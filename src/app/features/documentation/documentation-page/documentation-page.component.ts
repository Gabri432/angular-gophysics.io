import { Component } from '@angular/core';

import { Function } from '../../../core/models/function';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documentation-page',
  templateUrl: './documentation-page.component.html',
  styleUrls: ['./documentation-page.component.scss']
})
export class DocumentationPageComponent {

  private _jsonURL = 'assets/database/functions.json';
  functions: Array<Function> = [];
  products: any = [];

  constructor(public http: HttpClient) {
  };

  ngOnInit() {
    this.loadFunctions().subscribe(data =>{
      console.log(data);
      this.products = data;
      this.functions = data;
      console.log(this.functions);
    })
  }

  loadFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>((this._jsonURL))
  }

}
