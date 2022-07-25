import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {useShallowEqualSelector} from '@hooks';
import {networkIssueSelector} from '@selectors';
import {networkIssueActions} from '@actions';

import {NetworkIssueModal} from './NetworkIssueModal';

type Props = {
  children: JSX.Element;
};

const NetworkIssueModalWrapper: React.FC<Props> = props => {
  const {isConnectionError, tryAgainAction} =
    useShallowEqualSelector(networkIssueSelector);
  const dispatch = useDispatch();

  const removeIssue = useCallback(
    () => dispatch(networkIssueActions.removeNetworkIssue()),
    [dispatch],
  );
  const onTryAgain = useCallback(() => {
    tryAgainAction();
    removeIssue();
  }, [removeIssue]);
  const onClose = useCallback(() => {
    removeIssue();
  }, [removeIssue]);

  return (
    <NetworkIssueModal
      isVisible={isConnectionError}
      onTryAgain={onTryAgain}
      onClose={onClose}>
      {props.children}
    </NetworkIssueModal>
  );
};

export {NetworkIssueModalWrapper};
