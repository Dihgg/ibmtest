import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Item } from './item';
import { ITEMS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private snackBar: MatSnackBar ) { }

  getItems(): Observable<Item[]> {
    this.openSnackBar( 'Lista Carregada', 'Fechar' );
    return of( ITEMS );
  }

  openSnackBar( message: string, action: string ) {
    this.snackBar.open( message, action, {
      duration: 2000,
    });
  }
}
