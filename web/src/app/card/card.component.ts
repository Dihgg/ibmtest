import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../item';

import { ListService } from '../list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  edit = false;
  
  @Input() item: Item;
  

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
  }

  toggleChecked( isCheked: boolean ):void {
    this.item.checked = isCheked;
    // console.log( 'checked', this.item.checked );
    this.listService.editItem( this.item ).subscribe( item => this.item );
    // this.listService.checkItem( this.item.id, this.item.checked );
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  editClick(): void {
    this.listService.editItem( this.item ).subscribe( item => this.item );
    this.toggleEdit();
  }

  deleteClick(): void {
    this.listService.deleteItem( this.item ).subscribe( () => {
      this.item = null;
    });
  }

}
