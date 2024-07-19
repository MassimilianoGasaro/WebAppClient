import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';
import { Expense } from '../../interfaces/expenses';
import { HttpApiService } from '../../services/httpApi.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../shared/custom-dialog/custom-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, MatIconModule, MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: HttpApiService, private dialog: MatDialog,
    private toastr: ToastrService
  )
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
    let config: MatDialogConfig = {
      width: "30%",
      data: {
        action: "insert-record"
      }
    }

    this.openDialog(config);
  }

  public onUpdateRecord(id: number) {
    const itemUpdate = this.expensesList.filter(v => v.id === id);
    let config: MatDialogConfig = {
      width: "30%",
      data: {
        action: "update-record",
        id: id,
        name: itemUpdate[0].name,
        where: itemUpdate[0].where,
        cost: itemUpdate[0].cost,
        type: itemUpdate[0].type,
        date: itemUpdate[0].when,
        currency: itemUpdate[0].currency
      }
    }

    this.openDialog(config);
  }

  public onRemoveRecord(id: number) {
    const itemDelete = this.expensesList.filter(v => v.id === id);
    let config: MatDialogConfig = {
      width: "20%",
      data: {
        action: "remove-record",
        id: id,
        name: itemDelete[0].name,
      }
    }
    this.openDialog(config);
  }

  // PRIVATE METHODS

  private getExpensesData() {
    this.apiService.get("").subscribe({
      next: () => {},
      error: err => console.error(err)
    })
  }

  private openDialog(config: MatDialogConfig): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, config);

    dialogRef.afterClosed().subscribe({
      next: result => {
        console.log('The dialog was closed');
        console.log(result);
      },
      error: err => console.error(err)
    });
  }
}

export interface DialogData {
  action: string;
  name: string;
  where: string;
  cost: number;
  type: string;
  date: string;
  currency: string;
  id: number;
}
