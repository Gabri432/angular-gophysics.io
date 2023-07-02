import { Component } from '@angular/core';

import { Function } from '../../models/function';
import { Constant } from 'src/app/features/documentation/models/constant';
import { HttpClient } from '@angular/common/http';
import { LoadValuesService } from '../../services/load-values.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  functions: Array<Function> = [];
  constants: Array<Constant> = [];

  constructor(public http: HttpClient, public load: LoadValuesService) {
  };

  ngOnInit() {
    this.load.selectedFormulas.subscribe((data) => {
      this.functions = data;
    });
    this.load.selectedConstants.subscribe((data) => {
      this.constants = data;
    });
  }
}
