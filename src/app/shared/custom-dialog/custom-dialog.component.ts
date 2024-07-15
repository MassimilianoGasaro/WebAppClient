import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.css'
})
export class CustomDialogComponent {

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
