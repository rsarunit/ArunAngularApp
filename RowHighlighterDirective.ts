import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class RowHighlighterDirective {


  @HostListener('mouseenter') onmouseenter(){
    this.highlight('green');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight('red');
  }

  constructor(private el:ElementRef) { }

  highlight(color:string){
   this.el.nativeElement.style.backgroundColor=color;
  }

}
