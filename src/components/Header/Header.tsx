import React from 'react';
import {Button, Text, TouchableWithoutFeedback, View} from 'react-native';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {MenuIcon, BasketIcon, ArrowBack, HeartIcon} from '../icons/icons';

import styles from './styles';

interface Props {
  title: string;
  isMainPage?: boolean;
  navigation: NativeStackNavigationProp<ParamListBase>;
}

const Header: React.FC<Props> = props => {
  const {title, isMainPage = false, navigation} = props;

  return (
    <View style={styles.container}>
      {isMainPage ? (
        <TouchableWithoutFeedback onPress={() => {}}>
          <MenuIcon />
        </TouchableWithoutFeedback>
      ) : (
        <View style={styles.endIcons}>
          <TouchableWithoutFeedback
            onPress={function () {
              console.log('back');
              navigation.pop();
            }}>
            {/* This view is needed for correct work of touchable component */}
            <View>
              <ArrowBack />
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
      {isMainPage ? (
        <BasketIcon />
      ) : (
        <View style={styles.endIcons}>
          <HeartIcon />
          <BasketIcon />
        </View>
      )}
    </View>
  );
};

export default Header;
