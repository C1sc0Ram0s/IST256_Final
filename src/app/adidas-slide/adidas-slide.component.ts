import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-adidas-slide',
  templateUrl: './adidas-slide.component.html',
  styleUrls: ['./adidas-slide.component.css']
})
export class AdidasSlideComponent implements OnInit {

  cost = 250
  size: string | any
  quantity: number | any

  constructor(private cart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Adidas Yeezy Slide", cost: 300, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
