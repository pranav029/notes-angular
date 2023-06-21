import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DIALOG_NEGATIVE_RESPONSE, DIALOG_POSITIVE_RESPONSE } from 'src/app/Constants';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
  ) { }

  dismiss() {
    this.dialogRef.close(DIALOG_NEGATIVE_RESPONSE);
  }
  confirm() {
    this.dialogRef.close(DIALOG_POSITIVE_RESPONSE)
  }
}
