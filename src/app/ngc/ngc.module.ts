import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { SwitchComponent } from './components/switch/switch.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent
  ]
})
export class NgcModule { }
