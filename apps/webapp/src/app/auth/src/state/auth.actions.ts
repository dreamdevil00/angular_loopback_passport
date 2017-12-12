import { Action } from '@ngrx/store';

export const AuthActions = {
  AUTH_LOCAL_LOGIN:         'AUTH_LOCAL_LOGIN',
  AUTH_LOCAL_LOGIN_SUCCESS: 'AUTH_LOCAL_LOGIN_SUCCESS',
  AUTH_LOCAL_LOGIN_ERROR:   'AUTH_LOCAL_LOGIN_ERROR',
//  AUTH_LOCAL_LOGOUT:         'AUTH_LOCAL_LOGOUT',
//  AUTH_LOCAL_LOGOUT_SUCCESS: 'AUTH_LOCAL_LOGOUT_SUCCESS',
//  AUTH_LOCAL_LOGOUT_ERROR:   'AUTH_LOCAL_LOGOUT_ERROR',

  AUTH_LDAP_LOGIN:          'AUTH_LDAP_LOGIN',
  AUTH_LDAP_LOGIN_SUCCESS:  'AUTH_LDAP_LOGIN_SUCCESS',
  AUTH_LDAP_LOGIN_ERROR:    'AUTH_LDAP_LOGIN_ERROR',
//  AUTH_LDAP_LOGOUT:          'AUTH_LDAP_LOGOUT',
//  AUTH_LDAP_LOGOUT_SUCCESS:  'AUTH_LDAP_LOGOUT_SUCCESS',
//  AUTH_LDAP_LOGOUT_ERROR:    'AUTH_LDAP_LOGOUT_ERROR',

  AUTH_LOGOUT:              'AUTH_LOGOUT',
  AUTH_LOGOUT_SUCCESS:      'AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_ERROR:        'AUTH_LOGOUT_ERROR',
};

/** Auth Local */
export class AuthLocalLoginAction implements Action {
  readonly type = AuthActions.AUTH_LOCAL_LOGIN;
  constructor(public payload: any) {}
}
export class AuthLocalLoginSuccessAction implements Action {
  readonly type = AuthActions.AUTH_LOCAL_LOGIN_SUCCESS;
  constructor(public payload?: any) {}
}
export class AuthLocalLoginErrorAction implements Action {
  readonly type = AuthActions.AUTH_LOCAL_LOGIN_ERROR;
  constructor(public payload?: any) {}
}
/*
export class AuthLocalLogoutAction implements Action {
  readonly type = AuthActions.AUTH_LOCAL_LOGOUT;
  constructor(public payload: any) {}
}
export class AuthLocalLogoutSuccessAction implements Action {
  readonly type = AuthActions.AUTH_LOCAL_LOGOUT_SUCCESS;
  constructor(public payload?: any) {}
}
export class AuthLocalLogoutErrorAction implements Action {
  readonly type = AuthActions.AUTH_LOCAL_LOGOUT_ERROR;
  constructor(public payload?: any) {}
}
*/
/** Auth LDAP */
export class AuthLDAPLoginAction implements Action {
  readonly type = AuthActions.AUTH_LDAP_LOGIN;
  constructor(public payload?: any) {}
}
export class AuthLDAPLoginSuccessAction implements Action {
  readonly type = AuthActions.AUTH_LDAP_LOGIN_SUCCESS;
  constructor(public payload?: any) {}
}
export class AuthLDAPLoginErrorAction implements Action {
  readonly type = AuthActions.AUTH_LDAP_LOGIN_ERROR;
  constructor(public payload?: any) {}
}
/*
export class AuthLDAPLogoutAction implements Action {
  readonly type = AuthActions.AUTH_LDAP_LOGOUT;
  constructor(public payload?: any) {}
}
export class AuthLDAPLogoutSuccessAction implements Action {
  readonly type = AuthActions.AUTH_LDAP_LOGOUT_SUCCESS;
  constructor(public payload?: any) {}
}
export class AuthLDAPLogoutErrorAction implements Action {
  readonly type = AuthActions.AUTH_LDAP_LOGOUT_ERROR;
  constructor(public payload?: any) {}
}
*/
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
  /** Auth Local Actions */
  | AuthLocalLoginAction
  | AuthLocalLoginSuccessAction
  | AuthLocalLoginErrorAction
//  | AuthLocalLogoutAction
//  | AuthLocalLogoutSuccessAction
//  | AuthLocalLogoutErrorAction
  /** Auth LDAP Actions */
  | AuthLDAPLoginAction
  | AuthLDAPLoginSuccessAction
  | AuthLDAPLoginErrorAction
//  | AuthLDAPLogoutAction
//  | AuthLDAPLogoutSuccessAction
//  | AuthLDAPLogoutErrorAction
  | AuthLogoutAction
  | AuthLogoutSuccessAction
  | AuthLogoutErrorAction
