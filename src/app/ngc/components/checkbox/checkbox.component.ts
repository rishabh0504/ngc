import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  /*
  Add lable.
*/
  @Input()
  lable = 'Button';

  /*
    Add button size.
  */
  @Input()
  size: 'small' | 'large' | 'medium' = 'medium';


  @Input()
  type?: 'info' | 'warning' | 'success' | 'danger' = 'info';

  /*
    Add extra classes.
  */
  @Input()
  classes?: string;


  @Input() public isDisabled?: boolean = false;
  @Input() public isChecked?: boolean = true;

  constructor() { }



}
