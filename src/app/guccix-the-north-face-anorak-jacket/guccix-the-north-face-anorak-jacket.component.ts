import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-guccix-the-north-face-anorak-jacket',
  templateUrl: './guccix-the-north-face-anorak-jacket.component.html',
  styleUrls: ['./guccix-the-north-face-anorak-jacket.component.css']
})
export class GuccixTheNorthFaceAnorakJacketComponent implements OnInit {

  cost = 400
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Gucci x The North Face Anorak Jacket", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }
}
