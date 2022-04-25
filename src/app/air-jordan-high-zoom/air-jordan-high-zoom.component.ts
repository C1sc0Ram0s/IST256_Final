import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-air-jordan-high-zoom',
  templateUrl: './air-jordan-high-zoom.component.html',
  styleUrls: ['./air-jordan-high-zoom.component.css']
})
export class AirJordanHighZoomComponent implements OnInit {

  cost = 140
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Adidas Yeezy Foam RNNR", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
