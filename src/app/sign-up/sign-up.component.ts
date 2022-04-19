import { Component, OnInit } from '@angular/core';
import { LogInComponent } from "../log-in/log-in.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private logInComponent: LogInComponent, public router: Router) { }

  email = ""
  password = ""

  ngOnInit(): void {
  }

  storeUser(){
    this.logInComponent.users.push({username: this.email, password: this.password})
    console.log(this.logInComponent.users)
  }

  submitSignUp(){
    this.router.navigateByUrl("/home");
    this.logInComponent.users.push({username: this.email, password: this.password})
    console.log(this.logInComponent.users)
  }

}
