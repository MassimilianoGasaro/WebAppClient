import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';
import { Expense } from '../../interfaces/expenses';
import { HttpApiService } from '../../services/httpApi.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: HttpApiService,
  )
  {}

  // public faCoffee = faCoffee;

  public expensesList: Array<Expense> = [];

  ngOnInit(): void {
    this.expensesList =  [
      {
      id: 1,
      name: "GELATO",
      where: "torino",
      cost: 3,
      type: "svago",
      currency: "euro",
      when: ""
    },
    {
      id: 2,
      name: "GELATO",
      where: "torino",
      cost: 3,
      type: "svago",
      currency: "euro",
      when: ""
    }
  ];
  }

  public onAddRecord() {
    console.log("ADD");
  }

  public onUpdateRecord() {
    console.log("UPDATE");
  }

  public onRemoveRecord() {
    console.log("REMOVE");
  }

  // PRIVATE METHODS

  private getExpensesData() {
    this.apiService.get("").subscribe({
      next: () => {},
      error: err => console.error(err)
    })
  }
}
