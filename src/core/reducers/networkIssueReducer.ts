import {noop} from 'lodash';
import {networkIssueTypes} from '@actions';

export interface NetworkIssueState {
  isConnectionError: boolean;
  tryAgainAction(): void;
}

const initialState: NetworkIssueState = {
  isConnectionError: false,
  tryAgainAction: noop,
};

export default function networkIssueReducer(
  state: NetworkIssueState = initialState,
  action: networkIssueTypes.NetworkIssueTypes,
): NetworkIssueState {
  switch (action.type) {
    case networkIssueTypes.ADD_NETWORK_ISSUE:
      return {
        isConnectionError: true,
        tryAgainAction: action.tryAgainAction,
      };
    case networkIssueTypes.REMOVE_NETWORK_ISSUE:
      return {
        isConnectionError: false,
        tryAgainAction: noop,
      };
    default:
      return state;
  }
}
