import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { authService } from '../../services/auth';
import { OutputLogin, SuccessLogin } from '../../services/auth/abstraction';
import { loginFailure, loginSuccess } from '../actions';
import { LOGIN_REQUEST } from '../actionTypes';
import { LoginRequest } from '../reducers/types';

function* loginSaga(action: LoginRequest) {
  try {
    const response: OutputLogin = yield call(authService.login, {
      apiKey: process.env.REACT_APP_API_KEY,
      secretKey: process.env.REACT_APP_SECRET_KEY,
    });
    if (response instanceof SuccessLogin)
      yield put(
        loginSuccess({
          authToken: response.token,
        })
      );
    else throw new Error('Error in client');
  } catch (e) {
    let error = '';
    if (axios.isAxiosError(e)) {
      error = e?.response?.data.message || e.message;
    }
    yield put(
      loginFailure({
        error,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
export function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}
