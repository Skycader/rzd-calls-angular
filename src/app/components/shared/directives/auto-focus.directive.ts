import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

  @Input() appAutoFocus: string = "";
  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('focus') onFocus() {
    alert()
    this.el.nativeElement.click()
  }
}
