import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'bt-libs-ui-selectable-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectable-label.component.html',
  styleUrl: './selectable-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [selectedAnimation()],
})
export class SelectableLabelComponent {
  @Input() labelText!: string;
  @Input() get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.animationState = selected ? 'selected' : 'deselected';
  }

  @Output() selectedChange = new EventEmitter<boolean>();

  private _selected = false;
  animationState = 'deselected';

  onSelectionChanged() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}


export function selectedAnimation(): AnimationTriggerMetadata {
  return trigger('selectedState', [
    state('selected', style({ backgroundColor: 'black' })),
    state('deselected', style({ backgroundColor: 'yellow' })),
    transition(
      'selected <=> deselected',
      [animate('2s')]
    ),
  ])
}