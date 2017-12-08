import { NgModule } from '@angular/core';

// Third Party Modules
import {
  StoreModule,
  ActionReducer,
  combineReducers,
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as Auth from './auth';
import * as App from './state';

export interface State {
  auth: Auth.State;
  app:  App.State,
}

const reducers = {
  auth: Auth.reducer,
  app:  App.reducer,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      Auth.AuthEffects,
      App.AppEffects,
    ]),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AppStoreModule { }
