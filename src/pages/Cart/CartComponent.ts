import {connect, ConnectedProps} from 'react-redux';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {AppState} from '../../core/reducers/rootReducer';

import {Cart} from './Cart';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

function mapStateToProps(state: AppState, props: Props) {
  return {
    isLogged: state.profile.isLogged,
    cartData: state.cart.data,
    navigation: props.navigation,
  };
}

const connector = connect(mapStateToProps, () => ({}));

export type PropsFromRedux = ConnectedProps<typeof connector>;

export const CartComponent = connector(Cart);
