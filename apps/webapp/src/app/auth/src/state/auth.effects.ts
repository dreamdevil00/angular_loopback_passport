import { Injectable } from '@angular/core';
// Third Party
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/take';


// Local
import * as auth from './auth.actions';


@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login = this.actions$
    .ofType(auth.AuthActions.AUTH_LOGIN)
    .map((action: auth.AuthLoginAction) => action.payload)
    .do((action) => {
      setTimeout(() => {
        this.store.dispatch(new auth.AuthLoginSuccessAction());
      }, 2000);
    });

  @Effect({ dispatch: false })
  loginSuccess = this.actions$
    .ofType(auth.AuthActions.AUTH_LOGIN_SUCCESS)
    .do(() => this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' }))

  constructor(
    private router: Router,
    private store: Store<any>,
    private actions$: Actions,
  ) { }
}
