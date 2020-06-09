import { Injectable } from '@angular/core';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";

import { User } from  'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  userData: Observable<firebase.User>;
  user:User;
  result: auth.UserCredential;
  machineCode="baby2020";
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router){

  this.userData = afAuth.authState;
  //if the user is logged in, 
  //we add the user's data to the browser's local storage; 
  //otherwise we store a null user
  this.afAuth.authState.subscribe(user => {
    if (user){
      this.user = user;
      console.log(this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
  })

}


//check verification code
checkCode(code)
{
  if(code==this.machineCode)
  {
    return true
  }
  else{
    return false
  }
}


/* Sign up */
SignUp(name:string ,email: string, password: string ,enteredCode:string) {
  if(this.checkCode(enteredCode))
  {
    this.afAuth
    .createUserWithEmailAndPassword(email ,password)
    .then(res => {
      
      this.router.navigate(['/login']);
      //console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });
  }
  else
  {
    alert("code invalid..!!")
  }

}



/* Sign in */
SignIn(email: string, password: string) {
  this.afAuth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
    //console.log('You are Successfully logged in!');
    this.router.navigate(['/home']);
    }
  )
  .catch(err => {
    alert('Something is wrong:'+err.message);
    });
  }
   


  /* Sign out */
  SignOut() {
  this.afAuth.signOut();
  this.router.navigate(['/login']);
  }
   


/*
//login() method that will be used to login users with email and password:
async login(email: string, password: string) {
  var result = await this.afAuth.signInWithEmailAndPassword(email, password)
  this.router.navigate(['/home']);
}


//register() method that will be used to register users
async register(email: string, password: string) {
  this.result = await this.afAuth.createUserWithEmailAndPassword(email, password)
  this.sendEmailVerification();
}


//the sendEmailVerification() method 
//that will be be used to send a verification email to the user upon signup
async sendEmailVerification() {
  await (await this.afAuth.currentUser).sendEmailVerification()
  this.router.navigate(['verify-email']);
}

//the sendPasswordResetEmail() method 
//that will be used to send a password reset email
async sendPasswordResetEmail(passwordResetEmail: string) {
  return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
}

//the logout() method
async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['login']);
}

//the isLoggedIn() property to check if the user is logged in
get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  !==  null;
}

//loginWithGoogle() method that will be used to authenticate users with Google
/*

***

*/


}