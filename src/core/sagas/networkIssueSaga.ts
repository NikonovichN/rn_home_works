import {put, takeEvery} from 'redux-saga/effects';

import {networkIssueActions, networkIssueTypes} from '@actions';

function* onAddNetworkIssue(action: networkIssueTypes.AddNetworkIssue) {
  put(networkIssueActions.addNetworkIssue(action.tryAgainAction));
}

function* onRemoveNetworkIssue() {
  put(networkIssueActions.removeNetworkIssue());
}

export default function* networkIssueSaga() {
  yield takeEvery(networkIssueActions.addNetworkIssue, onAddNetworkIssue);
  yield takeEvery(networkIssueActions.removeNetworkIssue, onRemoveNetworkIssue);
}
