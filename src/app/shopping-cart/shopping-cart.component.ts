import { Component, OnInit } from '@angular/core';
import {LogInComponent} from "../log-in/log-in.component";
import {AdidasFoamRNNRComponent} from "../adidas-foam-rnnr/adidas-foam-rnnr.component";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  products = [
    {
      "name" : "",
      "cost": 0,
      "size" : "",
      "quantity": 0,
      "subtotal": 0
    },
  ]

  constructor(private adidasFoamRNNRComponent: AdidasFoamRNNRComponent) { }

  tr = ""
  ngOnInit(): void {
    // @ts-ignore
    for(let i in this.products){
      if(this.products[i].name == ""){
        continue
      }
      else{
        this.products[i].subtotal = this.products[i].cost * this.products[i].quantity;

        this.tr+="<tr>"
        this.tr+= "<td>" + this.products[i].name + "</td>"
        this.tr+= "<td>" + this.products[i].cost + "</td>"
        this.tr+= "<td>" + this.products[i].size + "</td>"
        this.tr+= "<td>" + this.products[i].quantity + "</td>"
        this.tr+= "<td style='padding-left: 110px'>$" + this.products[i].subtotal + "</td>"
        this.tr+= "<td><button class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash-o\"></i></button></td>"
        this.tr+="</tr>"
      }

    }
    // @ts-ignore
    document.getElementById("products").innerHTML = this.tr
  }


}
