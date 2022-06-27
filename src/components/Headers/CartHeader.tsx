import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import {ArrowBack} from '../icons/icons';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const CartHeader: React.FC<HeaderProps> = props => {
  const {title, navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.endIcons}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View>
            <ArrowBack />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.endIcons} />
    </View>
  );
};

export {CartHeader};
