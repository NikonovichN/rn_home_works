import React, {useCallback} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BasketIcon, ArrowBackIcon, HeartIcon} from '@icons';
import {Routes} from '@constants';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const PageHeader: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  const navigateToCart = useCallback(
    () => navigation.navigate(Routes.Cart),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.endIcons}>
        <TouchableWithoutFeedback onPress={goBack}>
          <View>
            <ArrowBackIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableWithoutFeedback onPress={navigateToCart}>
        <View>
          <BasketIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export {PageHeader};
