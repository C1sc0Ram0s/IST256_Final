import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-nike-tech-fleece-joggers',
  templateUrl: './nike-tech-fleece-joggers.component.html',
  styleUrls: ['./nike-tech-fleece-joggers.component.css']
})
export class NikeTechFleeceJoggersComponent implements OnInit {

  cost = 90
  size: string | any
  quantity: number | any

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendToCart() {
    let cart = {name: "Nike Tech Fleece Joggers", cost: this.cost, size: this.size, quantity: this.quantity}
    this.cart.addItem(cart)
  }

}
