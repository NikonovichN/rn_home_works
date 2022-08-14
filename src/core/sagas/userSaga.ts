import {call, put, takeLeading} from 'redux-saga/effects';

import * as actions from '../actions/userActions';
import * as actionTypes from '../actions/userTypes';

import {UserConverter} from '../converters/UserConverter';
import {createOrRefreshToken, fetchUser} from '../services';

interface Data {
  data: {};
}

function* onLoadUserData(action: actionTypes.UserLogin) {
  try {
    yield put(actions.getToken());
    yield put(actions.userLogInRequest());

    const tokenData: Data = yield call(
      createOrRefreshToken,
      action.credentials,
    );

    const tokens = UserConverter.tokenConvertor(tokenData.data);
    const userData: Data = yield call(fetchUser, tokens);
    const user = UserConverter.userConvertor(userData.data);

    yield put(actions.userLogInSuccess(user, tokens));
  } catch (error) {
    yield put(actions.userLogInFailure(`${error}`));
  }
}

export default function* userSaga() {
  yield takeLeading(actionTypes.USER_LOGIN, onLoadUserData);
}
