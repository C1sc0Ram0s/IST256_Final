import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-adidas-foam-rnnr',
  templateUrl: './adidas-foam-rnnr.component.html',
  styleUrls: ['./adidas-foam-rnnr.component.css']
})
export class AdidasFoamRNNRComponent implements OnInit {


  quantity: number | any
  shoePrice: number;
  size: string | any;

  constructor(private router:Router) {
    this.shoePrice = 300
  }

  ngOnInit(): void {
  }



  /*sendToCart() {
    this.shoppingCartComponent.products.push(
      {
        name: "Adidas Foam RNNR Vermillion",
        price: 300,
        size: this.size,
        quantity: this.quantity,
      })
    this.router.navigateByUrl("/shoppingCart")
  }*/

}
