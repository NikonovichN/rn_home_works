import React from 'react';

import {FirstLogin} from '../../components';

import {PropsFromRedux} from './CartComponent';
import {ContentCart, EmptyCart} from './components';

const Cart: React.FC<PropsFromRedux> = props => {
  const {isLogged, navigation, cartData} = props;

  if (!isLogged) {
    return <FirstLogin onPressLogIn={() => navigation.navigate('LogIn')} />;
  }

  return cartData ? (
    <ContentCart data={cartData.attributes} />
  ) : (
    <EmptyCart shopNow={() => navigation.navigate('MainScreen')} />
  );
};

export {Cart};
