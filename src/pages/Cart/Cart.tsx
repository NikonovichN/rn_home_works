import React from 'react';

import {FirstLogin} from '@components';
import {Routes} from '@navigation';

import {PropsFromRedux} from './CartComponent';
import {ContentCart, EmptyCart} from './components';

const Cart: React.FC<PropsFromRedux> = props => {
  const {isLogged, navigation, cartData} = props;

  if (!isLogged) {
    return (
      <FirstLogin onPressLogIn={() => navigation.navigate(Routes.LogIn)} />
    );
  }

  return cartData ? (
    <ContentCart data={cartData.attributes} />
  ) : (
    <EmptyCart shopNow={() => navigation.navigate(Routes.MainScreen)} />
  );
};

export {Cart};
