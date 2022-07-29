import {call, put, select, takeEvery} from 'redux-saga/effects';

import {profileActions, profileTypes} from '@actions';
// import {userSelector} from '@selectors';
// import {UserState} from '../reducers/userReducer';
import {fetchProfile, updateProfile} from '../services';
import {Profile} from '../entities';

function* getProfileSaga() {
  try {
    // const userState: UserState = yield select(userSelector);
    // const token = userState.user?.auth.access_token;

    // if (token) {
    yield put(profileActions.getProfileRequest());
    const profile: Profile = yield call(fetchProfile, 'token');

    yield put(profileActions.getProfileSuccess(profile));
    // } else {
    //   throw Error('No token');
    // }
  } catch (error) {
    yield put(profileActions.errorProfile(`${error}`));
  }
}

function* updateProfileSaga(action: profileTypes.UpdateProfile) {
  try {
    // const userState: UserState = yield select(userSelector);
    // const token = userState.user?.auth.access_token;

    // if (token) {
    yield put(profileActions.updateProfileRequest());
    const profile: Profile = yield call(updateProfile, 'token', action.body);

    yield put(profileActions.UpdateProfileSuccess(profile));
    // } else {
    //   throw Error('No token');
    // }
  } catch (error) {
    yield put(profileActions.errorProfile(`${error}`));
  }
}

export default function* profileSaga() {
  yield takeEvery(profileTypes.GET_PROFILE, getProfileSaga);
  yield takeEvery(profileTypes.UPDATE_PROFILE, updateProfileSaga);
}
