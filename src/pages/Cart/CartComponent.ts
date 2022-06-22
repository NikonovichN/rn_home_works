import {connect, ConnectedProps} from 'react-redux';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {AppState} from '../../core/reducers/rootReducer';

import Cart from './Cart';

interface Props {
  navigation: NativeStackNavigationProp<any, any>;
}

function mapStateToProps(state: AppState, props: Props) {
  return {
    isLogged: state.profile.isLogged,
    navigation: props.navigation,
  };
}

const connector = connect(mapStateToProps, () => ({}));

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
