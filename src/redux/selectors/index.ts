import { AppState } from '../reducers';

export const getAppSelector = (state: AppState) => state.app;

export const getAuthSelector = (state: AppState) => state.auth;

export const getValidateAccountSelector = (state: AppState) => state.validateAccount;

export const getRequestSelector = (state: AppState) => state.request;
