import { Action } from '@ngrx/store';

export const AppActions = {
  APP_REDIRECT_ROUTER:    'APP_REDIRECT_ROUTER',
  APP_REDIRECT_DASHBOARD: 'APP_REDIRECT_DASHBOARD',
  APP_REDIRECT_LOGIN:     'APP_REDIRECT_LOGIN',
};

export class AppRedirectRouterAction implements Action {
  readonly type = AppActions.APP_REDIRECT_ROUTER;
  constructor(payload?: any) {}
}
export class AppRedirectDashboardAction implements Action {
  readonly type = AppActions.APP_REDIRECT_DASHBOARD;
  constructor(payload?: any) {}
}
export class AppRedirectLoginAction implements Action {
  readonly type = AppActions.APP_REDIRECT_LOGIN;
  constructor(payload?: any) {}
}

export type AppActionsType =
  | AppRedirectRouterAction
  | AppRedirectDashboardAction
  | AppRedirectLoginAction
