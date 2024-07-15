import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';
import { Expense } from '../../interfaces/expenses';
import { HttpApiService } from '../../services/httpApi.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../shared/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, MatIconModule, MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: HttpApiService, private dialog: MatDialog)
  {}

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
    this.dialog.open(CustomDialogComponent);
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
