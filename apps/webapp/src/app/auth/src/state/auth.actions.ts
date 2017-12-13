import { Action } from '@ngrx/store';

export const AuthActions = {
  AUTH_LOGIN:         'AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_ERROR:   'AUTH_LOGIN_ERROR',

  AUTH_LOGOUT:        'AUTH_LOGOUT',
  AUTH_LOGOUT_SUCCESS:'AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_ERROR:  'AUTH_LOGOUT_ERROR',
};

/** Auth Login */
export class AuthLoginAction implements Action {
  readonly type = AuthActions.AUTH_LOGIN;
  constructor(public payload: any) {}
}
export class AuthLoginSuccessAction implements Action {
  readonly type = AuthActions.AUTH_LOGIN_SUCCESS;
  constructor(public payload?: any) {}
}
export class AuthLoginErrorAction implements Action {
  readonly type = AuthActions.AUTH_LOGIN_ERROR;
  constructor(public payload?: any) {}
}

export class AuthLogoutAction implements Action {
  readonly type = AuthActions.AUTH_LOGOUT;
  constructor(public payload?: any) {}
}
export class AuthLogoutSuccessAction implements Action {
  readonly type = AuthActions.AUTH_LOGOUT_SUCCESS;
  constructor(public payload?: any) {}
}
export class AuthLogoutErrorAction implements Action {
  readonly type = AuthActions.AUTH_LOGOUT_ERROR;
  constructor(public payload?: any) {}
}

export type AuthActionsType =
  | AuthLoginAction
  | AuthLoginSuccessAction
  | AuthLoginErrorAction
  | AuthLogoutAction
  | AuthLogoutSuccessAction
  | AuthLogoutErrorAction
