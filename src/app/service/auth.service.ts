import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName : string = '';
  userID :string = '' ;
  isLoggedId : boolean  = false;

  constructor(private auth : AngularFireAuth,private router : Router) { }

  login(email : string , password : string){
    this.auth.signInWithEmailAndPassword(email,password).then((user)=>{
      this.loadUser();
      this.isLoggedId = true;
      console.log(user.user?.displayName);
    });
    this.router.navigate(['/']);
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('userID');
    this.auth.signOut();
    this.isLoggedId = false;
    this.router.navigate(['/login']);
  }

  signeUp(name :string,email:string,password:string){
    this.auth.createUserWithEmailAndPassword(email,password).then((user)=>{
      user.user?.updateProfile({
        displayName: name
      })
      this.login(email,password);
    })
  }

  loadUser(){
    this.auth.authState.subscribe(user=>{
      if(user){
        this.userName = JSON.parse(JSON.stringify(user)).displayName;
        this.userID = JSON.parse(JSON.stringify(user)).uid;
        console.log(this.userID);
        localStorage.setItem('userID', this.userID);
        localStorage.setItem('userName', this.userName);
        console.log(this.userName);
      }
    })
  }

}
