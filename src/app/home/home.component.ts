import { Component } from '@angular/core';
import { Function } from '../interfaces/function';

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

}
