import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  delete: boolean;
}

@Component({
  selector: 'app-card-dialog-delete',
  templateUrl: './card-dialog-delete.component.html',
  styleUrls: ['./card-dialog-delete.component.scss']
})
export class CardDialogDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CardDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  onCloseClick(): void {
    this.dialogRef.close();
    this.data = { delete: false };
    console.log();
  }

}
