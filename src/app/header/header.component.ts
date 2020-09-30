import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <ul class="list-group">
      <li *ngFor="let item of array"  class="list-group-item">
        {{item.title}}
      </li>
    </ul>
  `,
  styles: [`
    ul{
      text-align: right;
    
    }
    li{
      color: red;
      background-color: blue;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  array = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
  ]
  ngOnInit() {


  }

}
