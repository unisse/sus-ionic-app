import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;
import {User} from 'firebase';
import {map} from "rxjs/operators";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private routes: Router) { }

  public doGoogleLogin(): Promise<UserCredential> {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
          .signInWithPopup(provider)
          .then(res => {
            resolve(res);
          });
    });
  }

  public currentUser(): Observable<User> {
    return this.afAuth.user;
  }

  public user(): User {
    return this.afAuth.auth.currentUser;
  }

  public isAuthenticaded(): Observable<boolean> {
    return this.afAuth.user.pipe(map(user => user != null));
  }

  public logout(): void {
    this.afAuth.auth.signOut().then( () => this.routes.navigate(['/']));
  }
}