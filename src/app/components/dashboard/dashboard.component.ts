import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';
import { Expense } from '../../interfaces/expenses';
import { HttpApiService } from '../../services/httpApi.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: HttpApiService) {
  }

  public expensesList: Array<Expense> = [];

  ngOnInit(): void {
  }

  private getExpensesData() {
    this.apiService.get("").subscribe({
      next: () => {},
      error: err => console.error(err)
    })
  }
}
