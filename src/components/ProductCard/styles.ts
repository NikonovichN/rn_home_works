import {StyleSheet} from 'react-native';

import {Colors, CommonStyles} from '../../core/styles/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 4,
    margin: 10,
    padding: 5,
    ...CommonStyles.shadow,
  },
});
