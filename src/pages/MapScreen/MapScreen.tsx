import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Colors} from '@styles';

import {Map} from './Map';

const MapScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export {MapScreen};
