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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(CONSTANTS.API.GET)
    .pipe(
      tap(_ => this.log('Items carregados')),
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  addItem( item: Item ): Observable<Item> {
    return this.http.post<Item>(CONSTANTS.API.ADD, item, this.httpOptions)
    .pipe(
      tap(_ => this.log('Item Adicionado')),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  editItem( item: Item ): Observable<any> {
    return this.http.put<Item>(`${CONSTANTS.API.EDIT}/${item.id}`, item, this.httpOptions)
    .pipe(
      tap(_ => this.log('Item Editado')),
      catchError(this.handleError<any>('editItem'))
    );
  }

  deleteItem( item: Item ): Observable<any> {
    return this.http.delete<Item>(`${CONSTANTS.API.DELETE}/${item.id}`, this.httpOptions)
    .pipe(
      tap(_ => this.log('Item Apagado')),
      catchError(this.handleError<any>('deleteItem'))
    );
  }

  private log(message: string) {
    this.openSnackBar(`Lista: ${message}`, 'Fechar');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

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
