import * as actions from './networkIssueTypes';

export function addNetworkIssue(
  tryAgainAction: () => void,
): actions.AddNetworkIssue {
  return {type: actions.ADD_NETWORK_ISSUE, tryAgainAction};
}

export function removeNetworkIssue(): actions.RemoveNetworkIssue {
  return {type: actions.REMOVE_NETWORK_ISSUE};
}
