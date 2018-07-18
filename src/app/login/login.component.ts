import { Component, OnInit } from '@angular/core';
import { NgModel,NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

import {User} from "../model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  login(LoginForm:NgForm){
   console.log('this.user: ' , this.user);
   this.auth.login(this.user).subscribe(
     (data)=>{
       console.log('on success : ' , data);
       LoginForm.reset();
     },
     (error)=>{
       console.log('on error : ', error);
     }
   );
 
  }
}
