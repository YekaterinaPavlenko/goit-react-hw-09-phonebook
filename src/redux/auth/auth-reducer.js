import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';
const initialUserState = { name: null, email: null };
const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, action) => {
    console.log(action.payload.user);
    return action.payload.user;
  },
  [authActions.loginSuccess]: (_, action) => action.payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, action) => action.payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, action) => action.payload.token,
  [authActions.loginSuccess]: (_, action) => action.payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, action) => action.payload,
  [authActions.loginError]: (_, action) => action.payload,
  [authActions.logoutError]: (_, action) => action.payload,
  [authActions.getCurrentUserError]: (_, action) => action.payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.getCurrentUserError]: () => false,
});
const authReducer = combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
export default authReducer;
