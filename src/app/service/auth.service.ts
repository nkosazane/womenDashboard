import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) { 
    this.user = afAuth.authState;

    this.user.subscribe((user) => {
      if(user){
        this.userDetails = user;
        console.log(this.userDetails);
      }
      else{
        this.userDetails = null;
      }
    })
  }

  // doRegister(value){
  //   return new Promise<any>((resolve, reject) =>{
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(res =>{
  //       resolve(res);
  //     }, err => reject(err))
  //   })
  // }

  signInRegular(email, password){
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }
  
  isLoggedIn(){
    if (this.userDetails == null){
      return false;
    } else {
      return true;
    }
  }

  logout(){
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/']));
  }
}
