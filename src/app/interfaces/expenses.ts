export type Expense = {
  id: number;
  name: string;
  where: string;
  cost: number;
  currency: string;
  date: string;
  typeId: number;
  userId: number;
}

export type ExpenseDTO = {
  name: string;
  where: string;
  cost: number;
  currency: string;
  date: string;
  typeId: number;
}
