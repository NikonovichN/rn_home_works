import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import * as actions from '../actions/phoneListActions';
import * as actionTypes from '../actions/phoneListTypes';
import {fetchPhoneList} from '../services/fetchPhoneList';

function* onLoadPhoneList() {
  try {
    yield put(actions.getPhonesRequest());
    const data: String = yield call(fetchPhoneList);

    console.log('data ', data);
  } catch (error) {
    console.log('error ', error);
  }
}

function* watchOnLoadPhoneList() {
  yield takeEvery(actionTypes.GET_PHONES, onLoadPhoneList);
}

export default function* phoneListSaga() {
  yield all([fork(watchOnLoadPhoneList)]);
}
