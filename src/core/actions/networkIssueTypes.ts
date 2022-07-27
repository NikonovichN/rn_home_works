export const ADD_NETWORK_ISSUE = 'network_issue/ADD_NETWORK_ISSUE';
export interface AddNetworkIssue {
  type: typeof ADD_NETWORK_ISSUE;
  tryAgainAction(): void;
}

export const REMOVE_NETWORK_ISSUE = 'network_issue/REMOVE_NETWORK_ISSUE';
export interface RemoveNetworkIssue {
  type: typeof REMOVE_NETWORK_ISSUE;
}

export type NetworkIssueTypes = AddNetworkIssue | RemoveNetworkIssue;
