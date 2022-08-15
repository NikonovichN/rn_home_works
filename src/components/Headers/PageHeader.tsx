import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BasketIcon, ArrowBackIcon} from '@icons';
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
      <ArrowBackIcon onPress={goBack} />
      <Text style={styles.title}>{props.title}</Text>
      <BasketIcon onPress={navigateToCart} />
    </View>
  );
};

export {PageHeader};
