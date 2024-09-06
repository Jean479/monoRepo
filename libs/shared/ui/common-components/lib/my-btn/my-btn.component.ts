import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class MyBtnComponent {}
