import {StyleSheet} from 'react-native';

import Colors from '../../core/styles/ColorTokens';

export default StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
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
