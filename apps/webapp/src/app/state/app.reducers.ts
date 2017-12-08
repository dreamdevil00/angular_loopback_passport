import * as App from './app.actions';

export interface State {
  settings: any;
};

const initialState: State = {
  settings: {},
};

export function reducer(state: State = initialState, action: App.AppActionsType) {
  switch (action.type) {
    default:
      return state;
  }
}
