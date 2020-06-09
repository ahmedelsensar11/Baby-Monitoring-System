import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //validation
  loginData = new FormGroup(
    {
      userEmail : new FormControl('' ,[Validators.required, Validators.email]),
      userPassword : new FormControl('',[Validators.required ,Validators.minLength(3), Validators.maxLength(30)])
    }
  );


  //Authentication
  //login proccess

  email: string;
  password: string;
  userData:any;  

  constructor(
    private  _AuthService:  AuthService,
    public  router:  Router
    ) {
    this.userData = _AuthService.userData
  }

  ngOnInit(): void {
  }

  signIn() {
  this._AuthService.SignIn(this.email, this.password);
  //console.log(this.userData);
  
  }

  directRegister()
  {
    this.router.navigate(['/register']);
  }

 testRouter()
 {
  alert("done")
 }
}
