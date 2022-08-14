import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ArrowBackIcon} from '@icons';

import {styles} from './styles';
import {HeaderProps} from './headerTypes';

const CartHeader: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.endIcons}>
        <ArrowBackIcon onPress={goBack} />
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.endIcons} />
    </View>
  );
};

export {CartHeader};
