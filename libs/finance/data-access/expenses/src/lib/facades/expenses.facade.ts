import { inject, Injectable } from '@angular/core';
import { IExpensesFacade } from './expenses.facade.interface';
import { ExpensesStore } from '../stores/expenses.store';
import { Observable, combineLatest, distinctUntilChanged, filter, map, withLatestFrom } from 'rxjs';
import { ExpenseModel, ExpensesViewModel } from '../models/expenses.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExpensesFacade implements IExpensesFacade {
  protected readonly expensesStore = inject(ExpensesStore)

  expenseSelector$ = this.expensesStore.expense$.
   pipe(withLatestFrom(this.expensesStore.inclVat$), map(([expense,
    inclVat]) => this.mapExpense(expense, inclVat)));

  selectedExpenseSelector$ = combineLatest([this.expensesStore.
    selectedExpense$, this.expensesStore.inclVat$]).
    pipe(filter(([expense]) => !!expense), map(([expense, inclVat]) =>
    this.mapExpense(expense as ExpenseModel, inclVat)));

  inclVatSelector$ = this.expensesStore.inclVat$;

  addExpense(expense: ExpenseModel): void {
    this.addExpense(expense);
  }
  adjustVat(): void {
    this.expensesStore.adjustVat();
  }
  clearExpenseSelection(): void {
    this.clearExpenseSelection()
  }
  deleteExpense(id: number): void {
    this.deleteExpense(id);
  }
  getExpense(id: number): void {
    this.getExpense(id);
  }
  resetExpenseState(): void {
    this.expensesStore.resetState();
  }
  selectExpense(id: number): void {
    this.expensesStore.selectExpense(id);
  }
  updateExpense(expense: ExpenseModel): void {
    this.expensesStore.updateExpense(expense);
  }

  //constructor() { }

  fetchExpenses(): void {
    this.expensesStore.fetchExpenses();      
  }

  getExpenses(): Observable<ExpensesViewModel> {
    return combineLatest([this.expensesStore.expenses$, this.expensesStore.inclVat$]).pipe(
      distinctUntilChanged(),
      map(([expenses, inclVat]) => ({
        expenses: expenses.map(expense => this.mapExpense(expense, inclVat) ),
        inclVat,
        total: expenses.reduce((acc, expense) => {
          return acc + (inclVat ? (expense.amount.value * (1 + expense.amount.vatPercentage / 100)) : expense.amount.value);
        }, 0),
      }))
    );
  }


  private mapExpense(expense: ExpenseModel, inclVat: boolean) {
    const expenseClone = structuredClone(expense) as ExpenseModel;
    expenseClone.amount.value = inclVat ? expenseClone.amount.value * (1 + expenseClone.amount.vatPercentage / 100) : expenseClone.amount.value;
    return expenseClone;
  }
}
