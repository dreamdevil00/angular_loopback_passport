import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Auth from '../../state/auth.actions';

@Component({
  template: `Logging out...`
})

export class LogoutComponent implements OnInit {
  constructor(private store: Store<any>) {
    this.store.dispatch(new Auth.AuthLogoutAction());
  }

  ngOnInit() { }
}
