import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  user: any = {
    username: "",
    email: "",
    password: ""
  }

  constructor(private router: Router) {}

  register(){
    if(this.user.username && this.user.email && this.user.password){
      alert("registration successful")
      sessionStorage.setItem("userDetails", JSON.stringify(this.user))
      this.router.navigate(['/login'])
    }
    else {
      alert("fill all the fields")
    }
  }

}
