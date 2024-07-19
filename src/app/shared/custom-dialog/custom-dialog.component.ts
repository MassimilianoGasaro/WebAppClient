import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DialogData } from '../../components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatDatepickerModule, MatDialogContent, MatDialogActions,
    MatDialogClose, MatButtonModule],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDialogComponent implements OnInit {

  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  readonly typologies: Array<string> = ["Generica", "Svago", "Investimento", "Stipendio"];
  readonly currencies: Array<string> = ["Euro", "Dollaro"];

  insertForm: FormGroup;

  view: number = 0; // 1 - insert 2 - update 3 - delete

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>,
    fb: FormBuilder
  ) {
    this.insertForm = fb.nonNullable.group({
      name: ['', [Validators.required]],
      cost: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      type: ['', [Validators.required]],
      where: ['', [Validators.required]],
      date: ['', [Validators.required]],
      currency: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    console.log(this.data);
    this.insertForm.patchValue(
      {
        name: this.data.name,
        cost: this.data.cost,
        type: this.data.type,
        where: this.data.where,
        date: this.data.date,
        currency: this.data.currency
      }
    );

    this.setView(this.data.action);
  }

  closeDialog(model: any) {
    this.dialogRef.close(model);
  }

  onSubmit() {
    this.closeDialog(this.insertForm.value);
  }

  // PRIVATE METHODS
  private setView(param: string) {
    switch (param) {
      case "insert-record":
        this.view = 1;
        break;
      case "update-record":
        this.view = 2;
        break;
      case "remove-record":
        this.view = 3;
        break;
      default:
        this.view = 0;
        break;
    }
  }
}
