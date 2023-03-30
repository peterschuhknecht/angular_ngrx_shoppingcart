import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

export const maxRetries = 2;
export const delayMs = 2000;

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private messageService: MessageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
            this.messageService.add({
              severity: 'error',
              summary: 'Client error',
              detail: error.message,
            });
          } else {
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            this.messageService.add({
              severity: 'error',
              summary: 'Server error',
              detail: error.message,
            });
          }
          throw Error(errorMsg);
        })
      )
  }
}
