import { obfuscateEmail } from '../../util/commons';
import { SET_VALIDATE_ACCOUNT_PARAMETERS } from '../constants/validateAccountActionTypes';
import { ValidateAccountActions, ValidateAccountState } from '../constants/validateAccountTypes';

const initialState: ValidateAccountState = {
  email: null,
  tokenExpirationTime: null,
};

export default (state = initialState, action: ValidateAccountActions) => {
  switch (action.type) {
    case SET_VALIDATE_ACCOUNT_PARAMETERS:
      return {
        ...state,
        email: action.payload.email,
        tokenExpirationTime: action.payload.tokenExpirationTime,
      };
    default:
      return {
        ...state,
      };
  }
};
