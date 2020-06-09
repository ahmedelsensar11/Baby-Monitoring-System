import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //validation
  registerData = new FormGroup(
    {
      userName : new FormControl('' ,[Validators.required, Validators.minLength(3)]),
      userEmail : new FormControl('' ,[Validators.required, Validators.email]),
      userPassword : new FormControl('',[Validators.required ,Validators.minLength(3), Validators.maxLength(30)]),
      machineCode : new FormControl('',[Validators.required ,Validators.minLength(3), Validators.maxLength(30)])

    }
  );
  
  
  //Authentication
  //login proccess

  name:string;
  machineCode:string;
  email: string;
  password: string;
  userData:any;  

  constructor(private  _AuthService:  AuthService) {
    this.userData = _AuthService.userData;
  }

  
  ngOnInit(): void {
  }


  //get name and verification code from form group (validation list)
  getNameAndCode()
  {
    this.name = this.registerData.value.userName;
    this.machineCode = this.registerData.value.machineCode;
  }
  
    
  signUp(){

    this.getNameAndCode();
    //sign proccess
    this._AuthService.SignUp(this.name,this.email, this.password,this.machineCode);
    //console.log(this.userData);
  }
  

  /*
  test()
  {
    this.getNameAndCode()
    console.log(this.name)
  
  }
  */


}
