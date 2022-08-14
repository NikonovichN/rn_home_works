import {call, put, takeLeading} from 'redux-saga/effects';

import {profileActions, profileTypes} from '@actions';
import {fetchProfile, updateProfile} from '../services';
import {Profile} from '../entities';

function* getProfileSaga() {
  try {
    yield put(profileActions.getProfileRequest());
    const profile: Profile = yield call(fetchProfile, 'token');

    yield put(profileActions.getProfileSuccess(profile));
  } catch (error) {
    yield put(profileActions.errorProfile(`${error}`));
  }
}

function* updateProfileSaga(action: profileTypes.UpdateProfile) {
  try {
    yield put(profileActions.updateProfileRequest());
    const profile: Profile = yield call(updateProfile, 'token', action.body);

    yield put(profileActions.UpdateProfileSuccess(profile));
  } catch (error) {
    yield put(profileActions.errorProfile(`${error}`));
  }
}

export default function* profileSaga() {
  yield takeLeading(profileTypes.GET_PROFILE, getProfileSaga);
  yield takeLeading(profileTypes.UPDATE_PROFILE, updateProfileSaga);
}
