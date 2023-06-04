import { Component } from '@angular/core';

import { Function } from '../../models/function';
import { Constant } from 'src/app/features/documentation/models/constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  private functionsUrl = 'assets/database/functions.json';
  private constantsUrl = 'assets/database/constants.json';
  functions: Array<Function> = [];
  constants: Array<Constant> = [];

  constructor(public http: HttpClient) {
  };

  ngOnInit() {
    this.loadFunctions().subscribe(data =>{
      this.functions = data;
    });
    this.loadConstants().subscribe(data => {
      this.constants = data;
    }) 
  }

  loadFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>((this.functionsUrl))
  }

  loadConstants(): Observable<Constant[]> {
    return this.http.get<Constant[]>((this.constantsUrl))
  }
}
