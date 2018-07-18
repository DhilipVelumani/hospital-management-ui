import { Router } from "@angular/router";
import { Injectable,EventEmitter,OnInit } from "@angular/core";
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { User } from "../model/user.model";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions:any;
  constructor(private http: HttpClient, private router: Router) { }

  gethttpHeaders(token:Boolean){
    if(token){
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('token')
            })
        };
    }
    else{
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
    }
    
    return this.httpOptions;
  }
  
  login(loginUserObj){
    var authBody = JSON.stringify(loginUserObj);
    return this.http.post('http://localhost:3000/users/login',authBody,this.gethttpHeaders(false));
  }

  signup(userObj){
    //var userBody = JSON.stringify(userObj);
    return this.http.post('http://localhost:3000/users/',userObj,this.gethttpHeaders(false));
  }

}
