import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {MenuIcon, BasketIcon} from '@icons';
import {Routes} from '@constants';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const MainHeader: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();
  const openDrawer = useCallback(
    () => navigation.dispatch(DrawerActions.openDrawer()),
    [navigation],
  );
  const navigateToCart = useCallback(
    () => navigation.navigate(Routes.Cart),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <MenuIcon onPress={openDrawer} />
      <Text style={styles.title}>{props.title}</Text>
      <BasketIcon onPress={navigateToCart} />
    </View>
  );
};

export {MainHeader};
