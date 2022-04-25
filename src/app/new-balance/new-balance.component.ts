import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-new-balance',
  templateUrl: './new-balance.component.html',
  styleUrls: ['./new-balance.component.css']
})
export class NewBalanceComponent implements OnInit {

  cost = 200
  size:string | any
  quantity: number | any

  constructor(private cart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "New Balance 550", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }
}
