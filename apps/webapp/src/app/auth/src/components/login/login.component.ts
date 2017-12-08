import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as Auth from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public credential: { username: string, password: string } = {
    username: 'Demo',
    password: 'Demo',
  };

  constructor(private store: Store<any>,) { }

  ngOnInit() { }

  login() {
    this.store.dispatch(new Auth.AuthLoginAction(this.credential));
  }
}
