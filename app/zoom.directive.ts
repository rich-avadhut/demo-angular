import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private renderer: Renderer, private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue');
      this.renderer.setElementStyle(this.el.nativeElement, 'font-size', '30px');
      //this.renderer.setElementStyle(this.el.nativeElement, 'font-size', '10px');
      //this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');    
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', '');
      this.renderer.setElementStyle(this.el.nativeElement, 'font-size', '');
    }
  }
}
