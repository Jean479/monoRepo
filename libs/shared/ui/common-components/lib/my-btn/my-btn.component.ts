import { ChangeDetectionStrategy, Component, Directive, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Observable } from 'rxjs';

@Directive({
  selector: '[btLibsUiTypeDirective]',
  standalone: true,  
})
export class TypeDirective {
  @Input() public btLibdUiType = 'primary';

  @Input() set btLibsUiTypeDirective(value: string) {
    console.log('>>>>>>>>>>>>>>  : btLibsUiTypeDirective: ', value);
  }
}

@Component({
  selector: 'bt-libs-ui-my-btn',
  hostDirectives: [
    {directive: TypeDirective, inputs: ['btLibsUiTypeDirective: type']}
  ],
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-btn.component.html',
  styleUrl: './my-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBtnComponent implements OnInit {

  timer: Observable<number> = interval(2000);
  count = 0;

  ngOnInit(): void {
    this.timer.subscribe({
       next:  v => { this.count = v; console.log(' ffff:', v);
        }, 
       error: e => console.log(' error:', e)
     }) 
  }

}
