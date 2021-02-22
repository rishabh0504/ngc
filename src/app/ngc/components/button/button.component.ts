import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  /*
    Add lable.
  */
  @Input()
  lable = 'Checkbox';

  /*
    Add button size.
  */
  @Input()
  size: 'small' | 'large' | 'medium' = 'medium';

  /*
    Add button type.
  */
  @Input()
  type?: 'info' | 'warning' | 'success' | 'danger' = 'info';

  /*
    Add extra classes.
  */
  @Input()
  classes?: string;


  /*
  Add icon if allowed.
  */

  @Input()
  icon?: string = null;

  /*
  Check if disabled;
  */

  @Input() public isDisabled?: boolean = false;

  public get extraClasses(): string[] {
    const disabledClass = this.isDisabled ? 'disable' : null;
    return [`ngc-button ngc-button-${this.size} ngc-button-${this.type} ngc-${disabledClass} ${this.classes}`];
  }
}
