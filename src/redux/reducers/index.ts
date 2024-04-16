import { combineReducers } from 'redux';

import appReducer from './appReducer';
import authReducer from './auth';
import requestReducer from './requestReducer';
import validateAccountReducer from './validateAccountReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  request: requestReducer,
  validateAccount: validateAccountReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
