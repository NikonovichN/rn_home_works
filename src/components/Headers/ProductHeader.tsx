import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BasketIcon, ArrowBackIcon, HeartIcon} from '@icons';
import {Routes} from '@navigation';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const ProductHeader: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.endIcons}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View>
            <ArrowBackIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.endIcons}>
        <HeartIcon />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(Routes.Cart)}>
          <View>
            <BasketIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export {ProductHeader};
