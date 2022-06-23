import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import {userLogIn} from '../../core/actions/userActions';
import {UserLoginTypes} from '../../core/actions/userTypes';
import {UserCredentials} from '../../core/entities/UserCredentials';
import {AppState} from '../../core/reducers/rootReducer';
import {RootStackParamList} from '../NavigationStack/types';

import LogIn from './LogIn';

interface Props {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<RootStackParamList, 'LogIn'>;
}

function mapStateToProps(state: AppState, props: Props) {
  return {
    isLogging: state.profile.loading,
    isLogged: state.profile.isLogged,
    navigation: props.navigation,
  };
}

function mapDispatchToProps(dispatch: Dispatch<UserLoginTypes>, props: Props) {
  return {
    logIn: (credentials: UserCredentials) =>
      dispatch(userLogIn(credentials, props.route.params?.action)),
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LogIn);
