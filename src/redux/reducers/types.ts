import {
  AUTH_CLEAR_ERROR,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actionTypes';

export type AuthState = {
  authToken?: string | null;
  pending: boolean;
  error?: string;
};

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
}

export type LoginPayload = {
  apiKey?: string;
  secretKey?: string;
};
export type LoginRequest = {
  type: typeof LOGIN_REQUEST;
};

export type LoginSuccessPayload = {
  authToken: string;
};
export type LoginFailurePayload = {
  error: string;
};
export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export type LogoutSuccess = {
  type: typeof LOGOUT_SUCCESS;
  payload: LoginSuccessPayload;
};
export type ClearError = {
  type: typeof AUTH_CLEAR_ERROR;
};
export type AuthActions = LoginSuccess | LoginFailure | LogoutSuccess | LoginRequest | ClearError;
