import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      {
        name: 'Barbearia',
        image: "../../../assets/images/banner.jpg"
      },
      {
        name: 'Cabeleireiro',
        image: "../../../assets/images/banner2.jpg"
      },
      {
        name: 'Tatuagem e Piercing',
        image: "../../../assets/images/banner2.jpg"
      },
      {
        name: 'Salão de beleza',
        image: "../../../assets/images/banner2.jpg"
      }
    ];
  }

}
