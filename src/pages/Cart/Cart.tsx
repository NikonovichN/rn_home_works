import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirstLogin} from '@components';
import {Routes} from '@constants';

import {ContentCart, EmptyCart} from './components';
import {useShallowEqualSelector} from '@hooks';
import {cartSelector, userSelector} from '@selectors';

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const {data} = useShallowEqualSelector(cartSelector);
  const {isLogged} = useShallowEqualSelector(userSelector);

  const navigateToLogin = useCallback(
    () => navigation.navigate(Routes.LogIn),
    [navigation],
  );
  const navigateToMainScreen = useCallback(
    () => navigation.navigate(Routes.MainScreen),
    [navigation],
  );

  if (!isLogged) {
    return <FirstLogin onPressLogIn={navigateToLogin} />;
  }

  return data ? (
    <ContentCart data={data.attributes} />
  ) : (
    <EmptyCart shopNow={navigateToMainScreen} />
  );
};

export {Cart};
