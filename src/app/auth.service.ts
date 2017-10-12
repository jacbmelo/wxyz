import { Injectable } from '@angular/core';
import Auth0Lock from 'auth0-lock';
import { tokenNotExpired } from 'angular2-jwt';

// FIXME: replace these with your own Auth0 'Client ID' and 'Domain'
const AUTH0_CLIENT_ID = 'CKISsvKgLVTHCbYHcEuve4lN7m7p1Pwi';
const AUTH0_DOMAIN = 'wxyz.eu.auth0.com';

// this is the key to the JWT in the browser localStorage
const ID_TOKEN = 'id_token';

@Injectable()
export class AuthService {
  options = {
    oidcConformant: true,
    auth: {
      audience: 'https://wxyz.eu.auth0.com/userinfo'
    }
  };
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, this.options);

  constructor() {
    // listening to 'authenticated' events
    this.lock.on('authenticated', (authResult) => {

      // Use the token in authResult to getUserInfo() and save it to localStorage
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          return;
        }

        console.log(profile.name);

        //localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });

      localStorage.setItem(ID_TOKEN, authResult.accessToken);
      console.log(authResult);
    });
  }

  signIn() { this.lock.show(); }

  signOut() { localStorage.removeItem(ID_TOKEN); }

  authenticated() { return tokenNotExpired(); }
}
