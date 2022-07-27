import React, {ReactElement, ReactNode, useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirstLogin} from '@components';
import {Routes} from '@constants';
import {useShallowEqualSelector} from '@hooks';
import {cartSelector, userSelector} from '@selectors';

import {ContentCart, EmptyCart} from './components';

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const {data} = useShallowEqualSelector(cartSelector);
  const {isLogged} = useShallowEqualSelector(userSelector);

  const navigateToMainScreen = useCallback(
    () => navigation.navigate(Routes.MainScreen),
    [navigation],
  );

  const Component = useMemo(() => {
    if (!isLogged) {
      return <FirstLogin />;
    }

    return data ? (
      <ContentCart data={data.attributes} />
    ) : (
      <EmptyCart onButtonPress={navigateToMainScreen} />
    );
  }, [isLogged, data, navigateToMainScreen]);

  return Component;
};

export {Cart};
