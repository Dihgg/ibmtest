import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Item[];
  constructor( private listService: ListService ) {}

  ngOnInit() {
    this.listService.getItems().subscribe( items => this.items = items );
    // this.listService.getItems().subscribe( (data: any[]) => {
    //   console.log( data );
    //   this.items  = data.data;
    // } );
  }

  addClick(): void {
    // this.items.push({ id: null, name: "Novo Item", qty:1, checked: false })
    let _item: Item = {
      id: null,
      name: "Novo Item",
      qty: 1,
      checked: false
    }
    this.items.push( _item );

  }

}
