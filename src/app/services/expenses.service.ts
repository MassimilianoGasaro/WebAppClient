import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expenses';
import { HttpApiService } from './httpApi.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private httpService: HttpApiService) { }

  // public getList(): Array<Expense> {
  //   this.httpService.get("").pipe(

  //   );
  // }
}
