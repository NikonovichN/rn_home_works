import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Dot} from './Dot/Dot';

const DotsBox: React.FC = () => (
  <View style={styles.dotsContainer}>
    <Dot delay={0} />
    <Dot delay={550} />
    <Dot delay={1100} />
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
