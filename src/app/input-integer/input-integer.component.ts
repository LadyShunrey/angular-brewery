import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor(){}

  @Input()
  quantity!: number;

  ngOnInit(): void {
  }

  upQuantity(): void{
    if(this.quantity<beer.stock){
      this.quantity++;
    }
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
    }

  }

  changeQuantity(event: any): void {
    console.log(event);
    // event.preventDefault();
  }

}
