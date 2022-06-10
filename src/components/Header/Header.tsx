import React from 'react';
import {Text, View} from 'react-native';

import {MenuIcon, BasketIcon} from '../icons/icons';

import styles from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = props => {
  const {title} = props;

  return (
    <View style={styles.container}>
      <MenuIcon />
      <Text style={styles.title}>{title}</Text>
      <BasketIcon />
    </View>
  );
};

export default Header;
