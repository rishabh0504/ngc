import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconsComponent } from './components/icons/icons.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconsComponent
  ]
})
export class NgcModule { }
