import { Directive, ElementRef, HostBinding, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[btLibsUiHightlight]',
  standalone: true,
})
export class HightlightDirective implements OnInit {
  
  @HostBinding('style.backgroundColor') get Color() { return 'red'}

  private el = inject(ElementRef).nativeElement as HTMLElement;

  constructor() {
    console.log(' constru HightlightDirective');
    
  }

  ngOnInit(): void {
    console.log('>>>>>>>>>>>>>>> laaaaa');
    
    //this.el.style.backgroundColor = 'blue';
  }
}
