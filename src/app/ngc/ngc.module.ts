import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconsComponent } from './components/icons/icons.component';
import { DisabledDirective } from './directives/disabled.directive';
import { NoActiveDirective } from './directives/no-active.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    IconsComponent,
    DisabledDirective,
    NoActiveDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconsComponent,
    DisabledDirective,
    NoActiveDirective
  ]
})
export class NgcModule { }
