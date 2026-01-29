import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user: any = {
    email: "",
    password: ""
  }

  userDetails: any = {}

  constructor(private router: Router) {}

  login(){

    this.userDetails = JSON.parse(sessionStorage.getItem("userDetails") || "")

    if(this.user.email=== this.userDetails.email){
      if(this.user.password === this.userDetails.password){
        alert("login successful")
        this.router.navigate(['/calculator'])
      }
      else {
        alert("incorrect password")
      }
      
    }
    else {
      alert("invalid user")
    }
  }
}
