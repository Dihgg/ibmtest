import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './item';
import { ITEMS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getItems(): Observable<Item[]> {
     return of(ITEMS);
  }
}
