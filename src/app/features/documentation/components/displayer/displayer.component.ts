import { Component, Input } from '@angular/core';
import { Function } from '../../../../core/models/function';
import { Constant } from 'src/app/core/models/constant';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
export class DisplayerComponent {
  @Input() funct!: Function;
  @Input() constant!: Constant;
  showConstant = true;
  showFunction = false;

}
