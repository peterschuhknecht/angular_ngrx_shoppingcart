import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private messageService: MessageService
  ) {
  }

  public handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      // Server Error
      this.messageService.add({
        severity: 'error',
        summary: 'Server error',
        detail: error.message || 'Undefined server error'
      });
    } else {
      // Client Error
      this.messageService.add({
        severity: 'error',
        summary: 'Client error',
        detail: error.message || 'Undefined client error'
      });
    }
  }
}

