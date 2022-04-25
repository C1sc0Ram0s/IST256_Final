import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-juice-wrldx-vlone-legends-never-die-shirt',
  templateUrl: './juice-wrldx-vlone-legends-never-die-shirt.component.html',
  styleUrls: ['./juice-wrldx-vlone-legends-never-die-shirt.component.css']
})
export class JuiceWrldxVloneLegendsNeverDieShirtComponent implements OnInit {

  cost = 85
  size: string | any
  quantity: number | any

  constructor(private cart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Juice Wrld x Vlone Legends Never Die Shirt", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
