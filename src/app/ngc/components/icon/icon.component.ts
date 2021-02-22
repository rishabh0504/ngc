import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input()
  name: string = '';

  @Input()
  size?: 'small' | 'medium' | 'large' | 'extra-large' = 'small';

  @Input()
  type?: 'info' | 'warning' | 'success' | 'danger' | 'default' = 'default';

  @Input()
  classes?: string = '';

  public get extraClasses(): string[] {
    return [`fa fa-${this.name} ngc-icon ngc-fa-${this.size} ngc-fa-${this.type} ${this.classes}`];
  }
}
