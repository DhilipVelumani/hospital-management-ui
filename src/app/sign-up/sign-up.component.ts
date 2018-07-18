import { Component, OnInit } from '@angular/core';
import { NgModel,NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

import {User} from "../model/user.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User = new User();

  // onSubmit() { this.submitted = true; }
  constructor(private auth:AuthService) {
   /* this.user.firstName = 'Dhilip';
      this.user.lastName = 'Dhilip';
        this.user.mobNum = 1;
          this.user.email = 'Dhilip@abc.com';*/
    console.log('user: ' , this.user.lastName);
  }

  ngOnInit() {
  }

  signUpUser(registerForm:NgForm){
    this.user.userType = 'Patient';
    console.log('user: ', this.user);
    this.auth.signup(this.user).subscribe(
      (data)=>{
        console.log('Register success: ', data);
      },
      (error)=>{
        console.log('error: ' , error);
      }
    );
  }
}
