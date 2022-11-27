import { Component } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {

  beers: Beer[] = [
  {
    name: 'Bitter Call Saul',
    type: 'IPA',
    price: 180,
    stock: 5,
    image: 'assets/img/porter.jpeg',
    clearance: false,
    quantity: 0,
  },
  {
    name: 'Red Red Wine',
    type: 'Barley Wine',
    price: 200,
    stock: 3,
    image: 'assets/img/porter.jpeg',
    clearance: true,
    quantity: 0,
  },
  {
    name: 'Yellow Submarine',
    type: 'Golden Ale',
    price: 180,
    stock: 0,
    image: 'assets/img/porter.jpeg',
    clearance: false,
    quantity: 0,
  },
  {
    name: 'Negra Juerte',
    type: 'Porter',
    price: 100,
    stock: 4,
    image: 'assets/img/porter.jpeg',
    clearance: false,
    quantity: 0,
  }
  ];



}
