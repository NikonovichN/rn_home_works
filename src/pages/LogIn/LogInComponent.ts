import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import {userLogIn} from '../../core/actions/userActions';
import {UserLoginTypes} from '../../core/actions/userTypes';
import {UserCredentials} from '../../core/entities/UserCredentials';

import LogIn from './LogIn';

function mapDispatchToProps(dispatch: Dispatch<UserLoginTypes>) {
  return {
    logIn: (credentials: UserCredentials) => dispatch(userLogIn(credentials)),
  };
}

const connector = connect(null, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LogIn);
