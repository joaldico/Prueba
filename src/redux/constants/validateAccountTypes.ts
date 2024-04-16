import { SET_VALIDATE_ACCOUNT_PARAMETERS } from './validateAccountActionTypes';

export type ValidateAccountState = {
  email: string | null;
  tokenExpirationTime: number | null;
};
export type ValidateAccountTypePayload = {
  email: string;
  tokenExpirationTime: number;
};
export type ValidateAccountTypeAction = {
  type: typeof SET_VALIDATE_ACCOUNT_PARAMETERS;
  payload: ValidateAccountTypePayload;
};
export type ValidateAccountActions = ValidateAccountTypeAction;
