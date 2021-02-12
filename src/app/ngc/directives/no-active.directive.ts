import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[no-active]'
})
export class NoActiveDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style['cursor'] = 'default';
    el.nativeElement.style['pointer-events'] = 'none';
  }
}
