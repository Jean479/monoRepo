import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SampleServiceService } from '../../services/sample-service.service';
import { LoggerService } from '../../services/logger.service';
import { ExpensesHttpService, ExpenseModel, ExpensesFacade, ExpensesViewModel } from '@bt-libs/finance/data-access/expenses';
import { ModalComponent } from '@bt-libs/shared/common-components';
import { AddExpenseComponent } from '@bt-libs/finance/ui/expenses-registration-forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses-overview-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent, AddExpenseComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent implements OnInit {
 
  protected readonly expensesFacade = inject(ExpensesFacade);

  expenses = this.expensesFacade.getExpenses();
  /*expenses = signal<ExpenseModel[]>([
    {
      id: 1,
      description: "Office Supplies",
      amount: {
        value: 100,
        vatPercentage: 20,
      },
      date: "2024-01-04",
      tags: [
        "printer"
      ]
    },
    {
      id: 2,
      description: "Travel",
      amount: {
        value: 50,
        vatPercentage: 20,
      },
      date: "2024-01-04",
      tags: [
        "train",
        "public transport",
      ]
    }
  ]);*/

  showAddExpenseModal = signal(false);
  showSummary = signal(false);
  summaryBtnText = computed(() => {
    console.log('summaryBtnText');
    return this.showSummary() ? 'Hide summary' : 'Show summary'
  });
  /*
    totalInclVat = computed(() => this.showSummary() ? this.expenses().reduce(
    (total, { amount: { value, vatPercentage } }) => value / 100 * (100 + vatPercentage) + total,
    0
    ) : null
    );
 */
  /* e = effect(() => {
    console.log('effect', this.showSummary());
  })*/

  onSummaryChange() {
    this.showSummary.update(showSummary => !showSummary);
  }

  onAddExpense(expenseToAdd: ExpenseModel) {
    //this.expenses.update(expenses => [...expenses, expenseToAdd]);
   // this.showAddExpenseModal.set(false);
   console.log(' expenseToAdd:', expenseToAdd);
   
  }

  private sampleServiceService = inject(SampleServiceService);
  private loggerService = inject(LoggerService);
 
  protected readonly expensesApi = inject(ExpensesHttpService);

  ngOnInit(): void {
    console.log(' sampleServiceService', this.sampleServiceService.data);
    this.loggerService.info('Message à logger ExpensesOverviewPageComponent');
    this.loggerService.list();

    this.expensesFacade.fetchExpenses();
    this.expenses = this.expensesFacade.getExpenses();
  }

  clickHttp() {
    console.log(' clickHttp');

    this.expensesApi.get()
      // eslint-disable-next-line rxjs/no-ignored-error
      .subscribe((data) => {
        console.log(' >>>:', data);
    });

  }
}
