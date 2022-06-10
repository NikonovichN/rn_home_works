import {StyleSheet} from 'react-native';

import Colors from '../../core/styles/ColorTokens';

export default StyleSheet.create({
  container: {
    height: 55,
    padding: 16,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.text.onSurfacePrimary,
    fontWeight: '500',
    fontSize: 18,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
});
