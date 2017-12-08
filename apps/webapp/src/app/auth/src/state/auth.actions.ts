import { Action } from '@ngrx/store';

export const AuthActions = {
  AUTH_LOGIN:         'AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_ERROR:   'AUTH_LOGIN_ERROR'
};

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

export type AuthActionsType =
  | AuthLoginAction
  | AuthLoginSuccessAction
  | AuthLoginErrorAction
