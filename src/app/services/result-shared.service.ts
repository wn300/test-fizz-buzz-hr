import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultSharedService {
  public variable: Subject<any> = new Subject<any>();

  constructor() { }

  getVariable() {
    return this.variable;
  }

  setVariable(parametro: any) {
    return this.variable.next(parametro);
  }
}
