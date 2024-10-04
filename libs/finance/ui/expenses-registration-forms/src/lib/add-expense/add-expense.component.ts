import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AddExpense } from './add-expense.interface';
import { MaxWordCountDirective } from '@bt-libs/shared/util/form-validators';

@Component({
  selector: 'bt-libs-ui-add-expense-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MaxWordCountDirective],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {

  
  //Template driven form:

  @ViewChild('addExpenseForm') form!: NgForm;
  @Input() expenseToAdd: AddExpense = {
    description: '',
    amountExclVat: null,
    vatPercentage: null,
    date: null
  }

  @Output() addExpense = new EventEmitter<AddExpense>();

  onSubmit() {
    this.addExpense.emit(structuredClone(this.expenseToAdd));
    this.form.reset();
  }
}
