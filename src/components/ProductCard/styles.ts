import {StyleSheet} from 'react-native';

import {Colors, CommonStyles} from '../../core/styles/styles';

export default StyleSheet.create({
  commonContainerStyles: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    ...CommonStyles.shadow,
  },
});
