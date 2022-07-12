import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {MenuIcon, BasketIcon} from '@icons';
import {Routes} from '@navigation';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const MainHeader: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        {/* Here and below View Around of an icon is needed for correct work of <TouchableWithoutFeedback /> */}
        <View>
          <MenuIcon />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(Routes.Cart)}>
        <View>
          <BasketIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export {MainHeader};
