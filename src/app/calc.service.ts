import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  name = 'srikanth'
  company = { a: 1, b: 2 };
  salary = 100;

}
