import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class IconsComponent {
  @Input()
  name: string = '';

  @Input()
  size?: 'small' | 'medium' | 'large' | 'extra-large' = 'small';

  @Input()
  type?: 'info' | 'warning' | 'success' | 'danger' | 'default' = 'default';

  @Input()
  classes?: string = '';

  public get extraClasses(): string[] {
    return [`fa fa-${this.name} ngc-icons ngc-fa-${this.size} ngc-fa-${this.type} ${this.classes}`];
  }
}
