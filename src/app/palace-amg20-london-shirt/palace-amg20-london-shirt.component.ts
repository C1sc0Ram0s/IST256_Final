import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-palace-amg20-london-shirt',
  templateUrl: './palace-amg20-london-shirt.component.html',
  styleUrls: ['./palace-amg20-london-shirt.component.css']
})
export class PalaceAMG20LondonShirtComponent implements OnInit {

  cost = 75
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Palace AMG 2.0 London", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
