import { Injectable } from '@angular/core';
import { Function } from 'src/app/features/documentation/models/function';
import { Constant } from 'src/app/features/documentation/models/constant';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadValuesService {
  private formulas = new BehaviorSubject<Array<Function>>([]);
  selectedFormulas = this.formulas.asObservable(); 
  private constants = new BehaviorSubject<Array<Constant>>([]);
  selectedConstants = this.constants.asObservable();

  constructor(public http: HttpClient) { }

  setFormulas(formulas: Array<Function>): void {
    this.formulas.next(formulas);
  }

  setConstants(constants: Array<Constant>): void {
    this.constants.next(constants);
  }

}
