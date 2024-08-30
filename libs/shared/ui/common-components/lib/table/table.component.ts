import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-ui-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {


  @Input() selectData!: string;
  @Output() selectDataChange = new EventEmitter<string>();;


  @Output() dataChanged = new EventEmitter();


  emitData() {
    this.selectDataChange.emit('data emited from table');
    this.dataChanged.emit('table data changed');
  }
}
