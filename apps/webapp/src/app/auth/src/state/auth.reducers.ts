import * as Auth from './auth.actions';

export interface State {
  loggedIn: boolean;
  currentUser: any;
}

const initialState: State = {
  currentUser: null,
  loggedIn: false,
}

export function reducer(state: State = initialState, action: Auth.AuthActionsType): State {
  switch (action.type) {
    case Auth.AuthActions.AUTH_LOGIN:
      return Object.assign({}, state);
    case Auth.AuthActions.AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, { currentUser: action.payload, loggedIn: true })
    case Auth.AuthActions.AUTH_LOGOUT_SUCCESS:
      return Object.assign({}, state, { loggedIn: false, currentUser: null})
    default:
      return state;
  }
}
