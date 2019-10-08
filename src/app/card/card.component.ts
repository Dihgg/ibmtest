import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Item;
  edit = false;

  constructor() { }

  ngOnInit() {
  }
  toggleEdit(): void {
    this.edit = !this.edit;
  }

}
