import { Component, Input } from '@angular/core';
import { Function } from '../../../../core/models/function';
import { Constant } from 'src/app/core/models/constant';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
export class DisplayerComponent {
  @Input() funct: Function | undefined;
  @Input() constant: Constant | undefined;
  @Input() displayFunct!: boolean;
  @Input() displayConst!: boolean;

}
