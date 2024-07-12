import { CommonModule } from '@angular/common';
import { Component, Input, InputSignal, OnInit, input } from '@angular/core';
import { Expense } from '../../interfaces/expenses';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  expenses: InputSignal<Array<Expense>> = input<Array<Expense>>([], {alias: 'dataTable'});

  ngOnInit(): void {

  }
}
