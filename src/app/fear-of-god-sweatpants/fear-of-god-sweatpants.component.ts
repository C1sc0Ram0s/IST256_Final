import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-fear-of-god-sweatpants',
  templateUrl: './fear-of-god-sweatpants.component.html',
  styleUrls: ['./fear-of-god-sweatpants.component.css']
})
export class FearOfGodSweatpantsComponent implements OnInit {

  cost = 100
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Fear of God Pullover Hoodie", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
