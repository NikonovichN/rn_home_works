import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const CenterView: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F4F4F9',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
});
