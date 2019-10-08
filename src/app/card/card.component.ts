import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Item } from '../item';
import { CardDialogDeleteComponent } from '../card-dialog-delete/card-dialog-delete.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Item;
  edit = false;

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  deleteClick(): void {
    const dialogRef  = this.dialog.open(CardDialogDeleteComponent, {
      width: '250px',
      data: { delete: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
