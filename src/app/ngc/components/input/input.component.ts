import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() public isDisabled?: boolean = false;

  @Input()
  size: 'small' | 'large' | 'medium' = 'medium';

  @Input()
  placeholder?: string;

  constructor() { }

  ngOnInit(): void {
  }


  public get extraClasses(): string[] {
    const disabledClass = this.isDisabled ? 'disable' : null;
    return [`ngc-input ngc-${disabledClass}`];
  }
}
