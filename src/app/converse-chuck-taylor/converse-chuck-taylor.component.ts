import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-converse-chuck-taylor',
  templateUrl: './converse-chuck-taylor.component.html',
  styleUrls: ['./converse-chuck-taylor.component.css']
})
export class ConverseChuckTaylorComponent implements OnInit {

  cost = 160
  size: string | any
  quantity: number | any

  constructor(private cart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Converse Chuck Taylor", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
