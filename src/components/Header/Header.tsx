import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import {MenuIcon, BasketIcon, ArrowBack, HeartIcon} from '../icons/icons';

import styles from './styles';

interface Props {
  title: string;
  isMainPage?: boolean;
}

const Header: React.FC<Props> = props => {
  const {title, isMainPage = false} = props;

  return (
    <View style={styles.container}>
      {isMainPage ? (
        <MenuIcon />
      ) : (
        <View style={styles.endIcons}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <ArrowBack />
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
