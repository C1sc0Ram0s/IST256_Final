import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {Observable} from "rxjs";
import {Cart} from "../cart";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  total = 0
  constructor(public cartService: ShoppingCartService) { }

  ngOnInit(): void {
    // @ts-ignore
    for(let items of this.cartService.cart){
      this.total = this.total + (items.quantity * items.cost)
    }
  }



}
