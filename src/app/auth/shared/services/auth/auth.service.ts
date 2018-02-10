import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

export type Provider = 'Google' | 'Facebook' | 'Twitter' | 'Github';

@Injectable()
export class AuthService {

  constructor(
    private af: AngularFireAuth
  ) { }

  get authenticated(): Observable<boolean> {
    return this.af.authState
      .map(next => {
        if (!next) return false;
        return true;
      })
  }

  get user$(): Observable<firebase.User | null> {
    return this.af.authState;
  }

  get user() {
    return this.af.auth.currentUser;
  }

  createUser(email: string, password: string) {
    return this.af.auth
      .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth
      .signInWithEmailAndPassword(email, password);
  }

  loginWithPopup(provider: Provider) {
    switch (provider) {
        case 'Google':
            return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        case 'Facebook':
            return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        case 'Twitter':
            return this.af.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
        case 'Github':
            return this.af.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    }
  }

  logoutUser() {
    return this.af.auth.signOut();
  }

}
