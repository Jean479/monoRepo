export interface ExpenseDto {
  id: number | null;
  title: string;
  amount: number;
  vatPercentage: number;
  date: string;
  tags?: string[];
}

// export interface ExpenseModel {
//   id: number | null;
//   description: string;
//   amount: {
//     amountExclVat: number;
//     vatPercentage: number;
//   };
//   date: string;
//   tags?: string[];
// }


export interface ExpenseModel {
  id: number | null;
  description: string;
  amount: {
    value: number;
    vatPercentage: number;
  };
  date: string;
  tags?: string[];
}

export interface ExpensesViewModel {
  total: number;
  inclVat: boolean;
  expenses: ExpenseModel[];
}