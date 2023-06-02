import { Component } from '@angular/core';
import { Function } from '../interfaces/function';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  functionLibrary: Function = {
    id: 1,
    functionName: 'Force',
    functionDescription: 'The Force is the product of the mass and acceleration.',
    functionFormula: 'F=m*a',
    context: 'Classic Physics'
  };

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
