import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BasketIcon, ArrowBackIcon, HeartIcon} from '@icons';
import {Routes} from '@constants';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const ProductHeader: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  const navigateToCart = useCallback(
    () => navigation.navigate(Routes.Cart),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.endIcons}>
        <ArrowBackIcon onPress={goBack} />
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.endIcons}>
        <HeartIcon />
        <BasketIcon onPress={navigateToCart} />
      </View>
    </View>
  );
};

export {ProductHeader};
