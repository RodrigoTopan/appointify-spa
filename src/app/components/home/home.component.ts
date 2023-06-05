import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      {
        name: 'Category 1',
        description: 'This is the description for Category 1'
      },
      {
        name: 'Category 2',
        description: 'This is the description for Category 2'
      },
      {
        name: 'Category 3',
        description: 'This is the description for Category 3'
      }
    ];
  }

}
