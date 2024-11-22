import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ExpenseModel } from '../models/expenses.interfaces';
import { ExpensesHttpService } from '../http/expenses.http';

@Injectable({
  providedIn: 'root'
})
export class ExpensesStore {
  
  private inclVat = new BehaviorSubject<boolean>(false);
  inclVat$ = this.inclVat.asObservable();

  private expense: Subject<ExpenseModel> = new Subject();
  expense$ = this.expense.asObservable();

  private selectedExpense: BehaviorSubject<ExpenseModel | null> = new BehaviorSubject<ExpenseModel | null>(null);
  selectedExpense$ = this.selectedExpense.asObservable();

  private expenses = new BehaviorSubject<ExpenseModel[]>([]);
  expenses$ = this.expenses.asObservable();
  
  protected expensesApi = inject(ExpensesHttpService);

  private get currentExpenses () {return this.expenses.value}

  getExpense(id: number): void {
    const expense = this.currentExpenses.find(expense => expense.id === id);
    expense ? this.expense.next(expense) : this.fetchExpenseById(id);
  }

  selectExpense(id: number): void {
    const expense = this.currentExpenses.find(expense => expense.id === id);
    expense ? this.selectedExpense.next(expense) : this.fetchExpenseById(id, true);
  }

  updateExpense(expense: ExpenseModel): void {
    this.expensesApi.put(expense).subscribe({
      next: (expense) => {
        this.expenses.next(this.currentExpenses.map(exp => exp.id === expense.id ? expense : exp));
      },
      error: (err) => { console.log('err ==>', err) }
    })
  }

  addExpense(expense: ExpenseModel): void {
    this.expensesApi.post(expense).subscribe({
      next: (addedExpense) => {
        addedExpense.id = !addedExpense.id ? this.currentExpenses.length + 1 : addedExpense.id;
        this.expenses.next(([...this.currentExpenses, addedExpense]));
      },
      error: (err) => { console.log('err ==>', err) }
    })
  }

  deleteExpense(id: number): void {
    this.expensesApi.delete(id).subscribe({
      next: () => {
        this.expenses.next(this.currentExpenses.filter(expense => expense.id === id));
      },
      error: (err) => { console.log('err ==>', err) }
    })
  }

  adjustVat(): void {
    this.inclVat.next(!this.inclVat.value);
  }

  clearExpenseSelection(): void {
    this.selectedExpense.next(null);
  }

  resetState(): void {
    this.expenses.next([]);
    this.selectedExpense.next(null);
    this.inclVat.next(false);
  }

  private fetchExpenseById(id: number, select = false) {
    this.expensesApi.getById(id).subscribe({
      next: (expense) => { select ? this.selectedExpense.next(expense) : this.expense.next(expense) },
      error: (err) => { console.log('err ==>', err) }
    });
  }

  //constructor() { }

  fetchService(): void {
    this.expensesApi.get().subscribe({
        next: (expenses) => { this.expenses.next(expenses)},
        error: (err) => { console.log('fetchService err:', err);
      }
    });
  }
}
