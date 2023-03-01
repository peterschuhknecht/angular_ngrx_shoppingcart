import { Injectable } from '@angular/core';
import { Observable, tap } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  public getDataV1(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url);
  }

  public getDataV2(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url).pipe(
      tap((data: any) => console.log('Data fetched', data)),
      catchError(this.handleError('Failed to fetch data'))
    );
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      const message = `server returned code ${error.status} with body ${error.error}`;
      // TODO: transforming error for ui
      throw new Error(`${operation} failed: ${message}`);
    }
  }
}
