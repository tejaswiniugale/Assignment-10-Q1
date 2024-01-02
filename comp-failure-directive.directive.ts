import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailureDirective]'
})
export class CompFailureDirectiveDirective {

  constructor(private el: ElementRef,private renderer: Renderer2)  {}
  @HostListener('mouseover') onMouseOver() {
    this.changeTextColor('red');
  }

  @HostListener('mouseout') onMouseOut() {
    this.changeTextColor('black');
  }

  private changeTextColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}


 
