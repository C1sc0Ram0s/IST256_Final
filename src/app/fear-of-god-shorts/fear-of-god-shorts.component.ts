import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-fear-of-god-shorts',
  templateUrl: './fear-of-god-shorts.component.html',
  styleUrls: ['./fear-of-god-shorts.component.css']
})
export class FearOfGodShortsComponent implements OnInit {

  cost = 80
  size: string | any
  quantity: number | any
  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Fear of God Shorts", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
