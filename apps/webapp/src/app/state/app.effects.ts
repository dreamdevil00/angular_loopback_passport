import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';

import * as App from './app.actions';

@Injectable()
export class AppEffects {

  @Effect({ dispatch: false })
  redirectRouter = this.actions$
    .ofType(App.AppActions.APP_REDIRECT_ROUTER)
    .do(() => this.router.navigate(['/', 'router']));

  @Effect({ dispatch: false })
  redirectLogin = this.actions$
    .ofType(App.AppActions.APP_REDIRECT_LOGIN)
    .do(() => this.router.navigate(['/', 'login']));

  @Effect({ dispatch: false })
  redirectDashboard = this.actions$
    .ofType(App.AppActions.APP_REDIRECT_DASHBOARD)
    .do(() => this.router.navigate(['/', 'dashboard']));

  constructor(
    private router: Router,
    private actions$: Actions,
  ) { }
}
