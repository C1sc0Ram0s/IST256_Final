import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-nike-sbdunk-low',
  templateUrl: './nike-sbdunk-low.component.html',
  styleUrls: ['./nike-sbdunk-low.component.css']
})
export class NikeSBDunkLowComponent implements OnInit {

  cost = 2200
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Nike SB Dunk Low", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
