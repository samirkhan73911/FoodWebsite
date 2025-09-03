import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  show() {

    this.loading.next(true);
    // debugger
  }
  hide() {

    this.loading.next(false);
  }
}
