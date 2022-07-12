import React, {useCallback} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
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
      <TouchableWithoutFeedback onPress={openDrawer}>
        {/* Here and below View Around of an icon is needed for correct work of <TouchableWithoutFeedback /> */}
        <View>
          <MenuIcon />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableWithoutFeedback onPress={navigateToCart}>
        <View>
          <BasketIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export {MainHeader};
