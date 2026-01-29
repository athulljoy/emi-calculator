import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  register(){
    if(this.user.username && this.user.email && this.user.password){
      alert("reg successful")
      sessionStorage.setItem("userDetails", JSON.stringify(this.user))
    }
    else {
      alert("fill all the fields")
    }
  }

}
