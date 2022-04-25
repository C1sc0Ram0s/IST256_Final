import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-pop-smokex-vlone-tee',
  templateUrl: './pop-smokex-vlone-tee.component.html',
  styleUrls: ['./pop-smokex-vlone-tee.component.css']
})
export class PopSmokexVloneTeeComponent implements OnInit {

  cost = 80
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "PopSmoke x Vlone Tee", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
