import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-adidas-yeezy-knit-rnnr',
  templateUrl: './adidas-yeezy-knit-rnnr.component.html',
  styleUrls: ['./adidas-yeezy-knit-rnnr.component.css']
})
export class AdidasYeezyKnitRNNRComponent implements OnInit {

  size: string | any
  quantity: number | any
  cost = 270

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Adidas Yeezy Knit RNNR", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
