import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';


import { CONSTANTS } from './constants';

import { Item } from './item';
import { ITEMS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  addItem( item: Item ): void {
    console.log('create new');
  }

  editItem( item: Item ):void {
    console.log('edit');
  }

  deleteItem( item: Item ): void {
    console.log('delete');
    this.openSnackBar( 'Apagado', 'fechar' );
  }

  checkItem( id:number, check: boolean ):void {
    console.log('check');
  }

  getItems(): Observable<Item[]> {
    this.openSnackBar( 'Lista Carregada', 'Fechar' );
    return of( ITEMS );
    return this.http.get<Item[]>(CONSTANTS.API.LIST)
      .pipe(
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  private log(message: string) {
    this.openSnackBar(`Lista: ${message}`, 'Fechar');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log error

      // retornar vazio para não parar a aplicação
      return of(result as T);
    };
  }

  openSnackBar( message: string, action: string ) {
    this.snackBar.open( message, action, {
      duration: 2000,
    });
  }
}
