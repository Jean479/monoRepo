import { Observable } from "rxjs";
import { ExpenseModel, ExpensesViewModel } from "../models/expenses.interfaces";

export interface IExpensesFacade {
    expenseSelector$: Observable<ExpenseModel>;
    selectedExpenseSelector$: Observable<ExpenseModel>;
    inclVatSelector$: Observable<boolean>;

    addExpense(expense: ExpenseModel): void;
    adjustVat(): void;
    clearExpenseSelection(): void;
    deleteExpense(id: number): void;
    fetchExpenses(): void;
    getExpense(id: number): void;
    getExpenses(id: number): Observable<ExpensesViewModel>;
    resetExpenseState(): void;
    selectExpense(id: number): void;
    updateExpense(expense: ExpenseModel): void;
  }