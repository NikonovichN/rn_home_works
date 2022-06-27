import {StyleSheet} from 'react-native';

import {Colors, CommonStyles} from '../../core/styles';

export const styles = StyleSheet.create({
  container: {
    height: 55,
    padding: 16,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...CommonStyles.shadow,
    zIndex: 1999, // this is needed to display shadow.
  },
  title: {
    color: Colors.text.onSurfacePrimary,
    fontWeight: '500',
    fontSize: 18,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  endIcons: {
    width: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
