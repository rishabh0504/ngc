import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngc-disabled]'
})
export class DisabledDirective {

  constructor(el: ElementRef) {
    el.nativeElement.disabled = true;
  }

}
