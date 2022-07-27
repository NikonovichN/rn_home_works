import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {useShallowEqualSelector} from '@hooks';
import {networkIssueSelector} from '@selectors';
import {networkIssueActions} from '@actions';

import {NetworkIssueModal} from './NetworkIssueModal';
import {checkInternetConnection} from '@network';

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
    const failCallback = () =>
      dispatch(networkIssueActions.addNetworkIssue(tryAgainAction));

    removeIssue();
    setTimeout(() => checkInternetConnection(tryAgainAction, failCallback), 0);
  }, [removeIssue]);
  const onClose = useCallback(() => removeIssue(), [removeIssue]);

  return (
    <>
      {props.children}
      <NetworkIssueModal
        isVisible={isConnectionError}
        onTryAgain={onTryAgain}
        onClose={onClose}
      />
    </>
  );
};

export {NetworkIssueModalWrapper};
