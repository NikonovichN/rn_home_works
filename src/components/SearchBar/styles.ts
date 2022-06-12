import {StyleSheet} from 'react-native';

import {Colors, CommonStyles} from '../../core/styles/styles';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.white,
    ...CommonStyles.shadow,
  },
  containerBar: {
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    paddingLeft: 10,
  },
  input: {
    height: 40,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: 4,
    lineHeight: 0,
    fontSize: 15,
  },
});
