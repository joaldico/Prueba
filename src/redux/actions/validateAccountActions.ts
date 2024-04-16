import { SET_VALIDATE_ACCOUNT_PARAMETERS } from '../constants/validateAccountActionTypes';
import {
  ValidateAccountTypeAction,
  ValidateAccountTypePayload,
} from '../constants/validateAccountTypes';

export const setValidateAccountParameters = (
  payload: ValidateAccountTypePayload
): ValidateAccountTypeAction => ({
  type: SET_VALIDATE_ACCOUNT_PARAMETERS,
  payload,
});
