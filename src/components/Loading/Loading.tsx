import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles';

import Colors from '../../core/styles/ColorTokens';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

export default Loading;
