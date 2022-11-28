import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private cart: BeerCartService){
  }
}
