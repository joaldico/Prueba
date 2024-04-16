import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes';
import {
  LoginFailure,
  LoginFailurePayload,
  LoginRequest,
  LoginSuccess,
  LoginSuccessPayload,
} from '../reducers/types';

export const loginRequest = (): LoginRequest => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
});
