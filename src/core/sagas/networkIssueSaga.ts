import {put, takeLeading} from 'redux-saga/effects';

import {networkIssueActions, networkIssueTypes} from '@actions';

function* onAddNetworkIssue(action: networkIssueTypes.AddNetworkIssue) {
  put(networkIssueActions.addNetworkIssue(action.tryAgainAction));
}

function* onRemoveNetworkIssue() {
  put(networkIssueActions.removeNetworkIssue());
}

export default function* networkIssueSaga() {
  yield takeLeading(networkIssueActions.addNetworkIssue, onAddNetworkIssue);
  yield takeLeading(
    networkIssueActions.removeNetworkIssue,
    onRemoveNetworkIssue,
  );
}
