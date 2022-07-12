import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import {BasketIcon, ArrowBackIcon, HeartIcon} from '@icons';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const ProductHeader: React.FC<HeaderProps> = props => {
  const {title, navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.endIcons}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View>
            <ArrowBackIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.endIcons}>
        <HeartIcon />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
          <View>
            <BasketIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export {ProductHeader};
