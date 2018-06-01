import { Directive,ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[highlightcolor]'
  //<button class="btn btn-default" highlightcolor [highlightColor]="'green'"> My Button</button>
  // <button class="btn btn-default" [highlightcolor]="'green'"> My Button</button>
  // [] means define alias in @input
})
export class HighLightColorDirective {

  constructor(private el: ElementRef) { }

  @Input() highlightColor: string;

  // if you use alias of directive name you can use it value binding
  // @Input('highlightcolor') highlightColor: string;
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
