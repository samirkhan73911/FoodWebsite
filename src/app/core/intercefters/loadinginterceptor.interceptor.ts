import { Injectable } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';

export const LoaderInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};