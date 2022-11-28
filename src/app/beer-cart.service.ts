import { Injectable } from '@angular/core';
import { Beer } from './beer-list/Beer';

/**
 * Maneja la lógica del carrito
 */

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  cartList: Beer[] = [];

  constructor() { }

  addToCart(beer: Beer) {
    let item: Beer = this.cartList.find((v1) => v1.name == beer.name);
    if(!item){
      this.cartList.push(beer);
    }
    console.log(this.cartList);
  }

}
