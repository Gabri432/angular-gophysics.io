import { Component, Input } from '@angular/core';
import { Function } from '../../../core/models/function';

@Component({
  selector: 'app-function-displayer',
  templateUrl: './function-displayer.component.html',
  styleUrls: ['./function-displayer.component.scss']
})
export class FunctionDisplayerComponent {
  @Input() functionLibrary!: Function;
}
