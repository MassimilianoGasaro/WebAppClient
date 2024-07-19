import { CommonModule } from '@angular/common';
import { Component, Input, InputSignal, OnInit, OutputEmitterRef, input, output } from '@angular/core';
import { Expense } from '../../interfaces/expenses';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  expenses: InputSignal<Array<Expense>> = input<Array<Expense>>([], {alias: 'dataTable'});
  onUpdateRec: OutputEmitterRef<number> = output<number>();
  onDeleteRec: OutputEmitterRef<number> = output<number>();

  ngOnInit(): void {

  }

  public onUpdateRecord(id: number) {
    this.onUpdateRec.emit(id);
  }

  public onRemoveRecord(id: number) {
    this.onDeleteRec.emit(id);
  }
}
