import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as Auth from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public authType: string = 'auth-local';

  public localCredential: { username: string, password: string } = {
    username: 'Demo',
    password: 'Demo',
  };

  public ldapCredential: { username: string, password: string } = {
    username: 'Demo',
    password: 'Demo',
  };


  constructor(private store: Store<any>,) { }

  ngOnInit() { }

  login(payload: { type: string }) {
    switch (payload.type) {
      case 'local':
        return this.store.dispatch(new Auth.AuthLocalLoginAction(this.localCredential));
      case 'ldap':
        return this.store.dispatch(new Auth.AuthLDAPLoginAction(this.ldapCredential));
    }
  }
}
