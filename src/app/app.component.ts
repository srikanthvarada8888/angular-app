import { Component, OnInit } from '@angular/core';
import { CalcService } from './calc.service';
import {add, sub} from './calc'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public calc: CalcService) { }
  arr = [1,2,3,4,5,6,7,8,9,10]
  data;
  ngOnInit() {
    console.log(this.calc);
    this.data = {add, sub}
  }

}
