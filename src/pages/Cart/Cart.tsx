import React from 'react';
import {View} from 'react-native';

import {FirstLogin} from '../../components/components';

import {PropsFromRedux} from './CartComponent';

const Cart: React.FC<PropsFromRedux> = props => {
  const {isLogged} = props;

  return isLogged ? <View></View> : <FirstLogin onPressLogIn={() => {}} />;
};

export default Cart;
