import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
import { AuthService, AuthTypes, localStorageInfo, UserInfo } from '../../../packages/auth-sdk';


@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  localLogin = this.actions$
    .ofType(auth.AuthActions.AUTH_LOCAL_LOGIN)
    .do((action: auth.AuthLocalLoginAction) => {
      this.authService
        .login(AuthTypes.AUTH_LOCAL, action.payload)
        .subscribe(
          (success) => this.store.dispatch(new auth.AuthLocalLoginSuccessAction(success)),
          (error) => this.store.dispatch(new auth.AuthLocalLoginErrorAction(error))
        )
    });

  @Effect({ dispatch: false })
  localLoginSuccess = this.actions$
    .ofType(auth.AuthActions.AUTH_LOCAL_LOGIN_SUCCESS)
    .do((action: auth.AuthLocalLoginSuccessAction) => {
      const data: UserInfo = {
        authType: AuthTypes.AUTH_LOCAL,
        ...action.payload,
      }
      this.authService.setUser(data);
      this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' });
    }
  )

  @Effect({ dispatch: false })
  localLoginError = this.actions$
    .ofType(auth.AuthActions.AUTH_LOCAL_LOGIN_ERROR)
    .do((error) => {
      console.log(error);
      alert(error);
    });


    @Effect({ dispatch: false })
  ldapLogin = this.actions$
    .ofType(auth.AuthActions.AUTH_LDAP_LOGIN)
    .do((action: auth.AuthLDAPLoginAction) => {
      this.authService
        .login(AuthTypes.AUTH_LDAP, action.payload)
        .subscribe(
          (success) => this.store.dispatch(new auth.AuthLDAPLoginSuccessAction(success)),
          (error) => this.store.dispatch(new auth.AuthLDAPLoginErrorAction(error))
        )
    });

  @Effect({ dispatch: false })
  ldapLoginSuccess = this.actions$
    .ofType(auth.AuthActions.AUTH_LDAP_LOGIN_SUCCESS)
    .do((action: auth.AuthLDAPLoginSuccessAction) => {
      const data: UserInfo = {
        authType: AuthTypes.AUTH_LDAP,
        ...action.payload,
      }
      this.authService.setUser(data);
      this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' });
    }
  )

  @Effect({ dispatch: false })
  ldapLoginError = this.actions$
    .ofType(auth.AuthActions.AUTH_LDAP_LOGIN_ERROR)
    .do((error) => {
      console.log(error);
      alert(JSON.stringify(error));
    });

  @Effect({ dispatch: false })
  logout = this.actions$
    .ofType(auth.AuthActions.AUTH_LOGOUT)
    .do((action: auth.AuthLogoutAction) => {
      this.authService
        .logout()
        .subscribe(
          (success) => {
            this.store.dispatch(new auth.AuthLogoutSuccessAction(success));
          },
          (error) => {
            this.store.dispatch(new auth.AuthLogoutErrorAction(error));
          }
        )
    }
  )

  @Effect({ dispatch: false })
  logoutSuccess = this.actions$
    .ofType(auth.AuthActions.AUTH_LOGOUT_SUCCESS)
    .do((action: auth.AuthLogoutSuccessAction) => {
      this.authService.removeUser();
      this.router.navigate(['/']);
    }
  )

  @Effect({ dispatch: false })
  logoutError = this.actions$
    .ofType(auth.AuthActions.AUTH_LOGOUT_ERROR)
    .do((action: auth.AuthLogoutErrorAction) => {
      alert(JSON.stringify(action.payload));
    }
  )

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<any>,
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
