import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-nike-dunk-low',
  templateUrl: './nike-dunk-low.component.html',
  styleUrls: ['./nike-dunk-low.component.css']
})
export class NikeDunkLowComponent implements OnInit {

  cost = 288
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Nike Dunk Low", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
