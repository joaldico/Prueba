import { AUTH_CLEAR_ERROR, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes';
import { AuthActions, AuthState } from './types';

const initialState: AuthState = {
  pending: false,
  authToken: '',
  error: undefined,
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      localStorage.clear();
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.authToken);
      return {
        ...state,
        pending: false,
        authToken: action.payload.authToken,
        error: undefined,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: undefined,
      };
    default:
      return {
        ...state,
      };
  }
};
