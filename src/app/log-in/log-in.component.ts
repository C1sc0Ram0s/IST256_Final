import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email: string | undefined
  password: string | undefined

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  users = [
    {"username": "joe@gmail.com", "password": "1234"},
    {"username": "kevin@gmail.com", "password": "4321"},
  ]

  checkUser(){
    for(let user in this.users){
      if(this.email !== this.users[user].username || this.password !== this.users[user].password){
        // @ts-ignore
        document.getElementById("message").innerText = "Incorrect Username or Password"
        continue
      }
      else{
        this.router.navigateByUrl("/home")

      }
    }
  }
}
