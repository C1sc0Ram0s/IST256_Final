import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';


import {Router} from "@angular/router";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-adidas-foam-rnnr',
  templateUrl: './adidas-foam-rnnr.component.html',
  styleUrls: ['./adidas-foam-rnnr.component.css']
})
export class AdidasFoamRNNRComponent implements OnInit {


  quantity: number | any
  shoePrice: number;
  size: string | any;

  constructor(private router:Router, private cart:ShoppingCartService) {
    this.shoePrice = 300
  }
  ngOnInit(): void {
  }



  sendToCart() {
    let cart = {name: "Adidas Yeezy Foam RNNR", cost: 300, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
