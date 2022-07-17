import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Dot} from './Dot';

const dotDelays = [0, 550, 1100];

const DotsBox: React.FC = () => (
  <View style={styles.dotsContainer}>
    {dotDelays.map(delay => <Dot delay={delay} />)}
  </View>
);

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
});

export {DotsBox};
