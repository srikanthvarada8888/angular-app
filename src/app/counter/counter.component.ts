import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="counter">
    <button [style.color]="styles" : 'white'" [disabled] = "!this.counter ? true : false"  type="button" class="btn btn-danger" (click)="decrement()">Decrement -</button>
    <a class="btn btn-success">{{this.counter}}</a>
    <button type="button"  class="btn btn-primary" (click)="increment()">Increment +</button>
  </div>


  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter = 0;
  styles = 'red'
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  ngOnInit() {
  }

}
