import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngc';
  isDisabled: boolean = false;
  mouseover() {
    console.log('mouse over');
  }
  dblclick() {
    console.log('dblclick');
  }
  click() {
    console.log('click');
  }
  mouseenter() {
    console.log('mouseenter');
  }
  mouseleave() {
    console.log('mouseleave');
  }
  activateInfo() {
    this.isDisabled = !this.isDisabled;
  }
}
