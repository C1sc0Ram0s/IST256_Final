import { Component } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalProject';

  constructor(private logInComponent: LogInComponent, private router: Router){}

  email = ""

  checkEmail() {
    // @ts-ignore

    for(let i in this.logInComponent.users){
      if (this.email == this.logInComponent.users[i].username) {
        this.router.navigateByUrl('/logIn')
        // @ts-ignore
        document.getElementById('modalClose').click();
      }
      else{
        this.router.navigateByUrl('/signUp')
        // @ts-ignore
        document.getElementById('modalClose').click();
      }
    }
  }


}
