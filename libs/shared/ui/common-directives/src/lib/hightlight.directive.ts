import { Directive, ElementRef, HostBinding, HostListener, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[btLibsUiHightlight]',
  standalone: true,
})
export class HightlightDirective implements OnInit {
  
  //@HostBinding('style.backgroundColor') get Color() { return 'red'}

  @Input('btLibsUiHightlight') background!: string;

  @Input() textColor!: string;

  originalColor = 'black';
  originalBackground = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.style.color;
    this.originalBackground = this.el.style.backgroundColor;
    this.el.style.color = 'white';
    this.el.style.backgroundColor = 'black'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.style.color = this.originalColor
    this.el.style.backgroundColor = this.originalBackground;
  }



  private el = inject(ElementRef).nativeElement as HTMLElement;

  constructor() {
    console.log(' constru HightlightDirective');
    
  }

  ngOnInit(): void {
    console.log('>>>>>>>>>>>>>>> laaaaa');
    this.el.style.backgroundColor = this.background;
    this.el.style.color = this.textColor;

    
    //this.el.style.backgroundColor = 'blue';
  }
}
